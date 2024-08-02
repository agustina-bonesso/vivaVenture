import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import useSWR from "swr";
import { toast } from "react-toastify";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: activity, mutate } = useSWR(`/api/activities/${id}`);

  async function handleEditActivity(updatedActivity) {
    const response = await fetch(`/api/activities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();
    router.back();
    toast.success("Activity updated successfully!");
  }
  return (
    <>
      <StyledBackLink href={`/${id}`}>
        <Icon name="chevronLeft" />
        Discard changes
      </StyledBackLink>
      <ActivityForm
        initialData={activity}
        isEditMode
        onSubmit={handleEditActivity}
      />
    </>
  );
}
