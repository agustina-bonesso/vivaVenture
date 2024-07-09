import ActivityCard from "@/components/ActivityCard";

export default function Spotlight({
  randomActivity,
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  if (!randomActivity) return <p>No activity data available.</p>;

  return (
    <>
      <h1>Spotlight</h1>
      <ActivityCard
        activity={randomActivity}
        onToggleFavorite={() => onToggleFavorite(activityData.id)}
        isFavorite={
          favoriteActivitiesList.find(
            (favActivity) => favActivity.id === activityData.id
          )?.isFavorite
        }
      />
    </>
  );
}
