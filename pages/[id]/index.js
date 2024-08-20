import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { Modal } from "@/components/Modal";
import { toast } from "react-toastify";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { ModalButton } from "@/components/StyledButton";

export default function Activity({ onToggleFavorite, userData }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const { data: activity, isLoading, error } = useSWR(`/api/activities/${id}`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = session ? (userData?.favorites ?? []).includes(id) : false;
  async function confirmDeleteActivity() {
    setIsModalOpen(false);
    const response = await fetch(`/api/activities/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate("/api/activities");
    router.push("/");
    toast.success("Activity deleted successfully!");
  }

  async function handleDeleteActivity() {
    if (!session) {
      toast.info("Please login for this feature");
      return;
    }
    setIsModalOpen(true);
  }
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {activity ? (
        <ActivityDetails
          activity={activity}
          onDeleteActivity={handleDeleteActivity}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <p>Activity not found</p>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        header="Confirm Delete"
        footer={
          <>
            <ModalButton onClick={() => setIsModalOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton
              onClick={confirmDeleteActivity}
              $variant="modal-delete"
            >
              Delete
            </ModalButton>
          </>
        }
      >
        Are you sure you want to delete this item?
      </Modal>
    </>
  );
}
