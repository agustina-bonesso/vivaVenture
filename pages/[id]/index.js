import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function Activity({ activityData, onDeleteActivity }) {
  const router = useRouter();
  const { id } = router.query;

  const activity = activityData.find((activity) => activity.id === id);

  return (
    <>
      {activity ? (
        <ActivityDetails
          activity={activity}
          onDeleteActivity={onDeleteActivity}
        />
      ) : (
        <p>Activity not found</p>
      )}
    </>
  );
}
