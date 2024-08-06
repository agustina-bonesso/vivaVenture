import ActivityCard from "@/components/ActivityCard";

export default function Spotlight({
  randomActivity,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  if (!randomActivity) return <p>No activity data available.</p>;

  return (
    <>
      <h1>Spotlight</h1>
      <ActivityCard
        activity={randomActivity}
        onToggleFavorite={() => onToggleFavorite(randomActivity._id)}
        isFavorite={
          favoriteActivitiesList.find(
            (favActivity) => favActivity._id === randomActivity._id
          )?.isFavorite
        }
      />
    </>
  );
}
