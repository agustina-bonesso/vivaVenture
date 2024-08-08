import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";

export default function Favorites({
  favoriteActivitiesList,
  onToggleFavorite,
  activityData,
}) {
  const favoriteActivities = activityData.filter((activity) =>
    favoriteActivitiesList.includes(activity._id)
  );

  return (
    <>
      {favoriteActivities.length === 0 ? (
        <p>No favorite activities found.</p>
      ) : (
        <StyledList>
          {favoriteActivities.map((activity) => {
            return (
              <li key={activity._id}>
                <ActivityCard
                  activity={activity}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={favoriteActivities}
                />
              </li>
            );
          })}
        </StyledList>
      )}
    </>
  );
}
