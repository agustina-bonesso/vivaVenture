import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";

export default function Favorites({
  activityData,
  favoriteActivitiesList,
  onToggleFavorite,
}) {
  const favoriteActivities = activityData.filter((activity) =>
    favoriteActivitiesList.find(
      (favorivedActivity) =>
        favorivedActivity.id === activity.id && favorivedActivity.isFavorite
    )
  );

  return (
    <StyledList>
      {favoriteActivities.map((activity) => {
        return (
          <li key={activity.id}>
            <ActivityCard
              activity={activity}
              onToggleFavorite={onToggleFavorite}
              isFavorite
            />
          </li>
        );
      })}
    </StyledList>
  );
}


