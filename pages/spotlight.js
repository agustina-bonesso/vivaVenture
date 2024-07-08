import { useEffect, useState } from "react";
import ActivityCard from "@/components/ActivityCard";

export default function Spotlight({
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  const [randomActivity, setRandomActivity] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * activityData.length);
    setRandomActivity(activityData[index]);
    console.log(index);
  }, [activityData]);

  if (!randomActivity) return null;
  console.log(randomActivity);

  const isFavorite = favoriteActivitiesList.find(
    (favActivity) => favActivity.id === randomActivity.id
  );

  return (
    <>
      <h1>Spotlight</h1>
      <ActivityCard
        activity={randomActivity}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
