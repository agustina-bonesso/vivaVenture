import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";

export default function HomePage({
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  return (
    <StyledList>
      {activityData.map((activity) => {
        return (
          <li key={activity.id}>
            <ActivityCard
              activity={activity}
              onToggleFavorite={onToggleFavorite}
              isFavorite={
                favoriteActivitiesList.find(
                  (favActivity) => favActivity.id === activity.id
                )?.isFavorite
              }
            />
          </li>
        );
      })}
    </StyledList>
  );
}
