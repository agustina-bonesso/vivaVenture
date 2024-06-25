import ActivityForm from "@/components/ActivityForm";
import { useRouter } from "next/router";

export default function EditPage({ activityData, onEditActivity }) {
  const router = useRouter();
  const { id } = router.query;

  const activity = activityData.find((activity) => activity.id === id);

  return (
    <ActivityForm
      initialData={activity}
      isEditMode
      onEditActivity={onEditActivity}
    />
  );
}
