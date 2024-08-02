import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import useSWR from "swr";
import { toast } from "react-toastify";

export default function EditPage({ activityData }) {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWR(`/api/activities/${id}`);

  const activity = activityData.find((activity) => activity._id === id);

  async function handleEditActivity(updatedActivity) {
    const response = await fetch(`/api/activities/${activity._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    });

    if (response.ok) {
      mutate();
      toast.success("Activity updated successfully!");
    }
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
