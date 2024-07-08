import ActivityCard from "@/components/ActivityCard";
import ActivityDetails from "@/components/ActivityDetails";
import { useRouter } from "next/router";

function randomIndex(activityData) {
  const randomIndex = Math.floor(Math.random() * activityData.length);
  console.log(randomIndex);

  return activityData[randomIndex];
}

export default function Spotlight({
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  const randomActivity = randomIndex(activityData);
  randomIndex(activityData);
  console.log(randomActivity);
  return (
    <>
      <h1>Spotlight</h1>
      <ActivityCard
        activity={randomActivity}
        onToggleFavorite={onToggleFavorite}
        isFavorite={
          favoriteActivitiesList.find(
            (favActivity) => favActivity.id === randomActivity.id
          )?.isFavorite
        }
      />
    </>
  );
}
