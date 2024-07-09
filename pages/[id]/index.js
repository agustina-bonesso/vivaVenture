import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";

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
    (favActivity) => favActivity.id === activity.id
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
