import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function EditPage({ activityData, onEditActivity }) {
  const router = useRouter();
  const { id } = router.query;

  const activity = activityData.find((activity) => activity.id === id);

  return (
    <>
      <StyledBackLink href={`/${id}`}>
        <Icon name="chevronLeft" />
        Discard changes
      </StyledBackLink>
      <ActivityForm
        initialData={activity}
        isEditMode
        onSubmit={(newActivity) => onEditActivity({ ...newActivity, id: id })}
      />
    </>
  );
}
