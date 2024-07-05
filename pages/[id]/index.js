import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function Activity({
  activityData,
  onDeleteActivity,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  const router = useRouter();
  const { id } = router.query;

  const activity = activityData.find((activity) => activity.id === id);
  const isFavorite = favoriteActivitiesList.find(
    (activity) => activity.id === id
  )?.isFavorite;

  return (
    <>
      {activity ? (
        <ActivityDetails
          activity={activity}
          onDeleteActivity={onDeleteActivity}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <p>Activity not found</p>
      )}
    </>
  );
}
