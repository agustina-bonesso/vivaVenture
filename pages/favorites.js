import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";

export default function Favorites({
  favoriteActivitiesList,
  onToggleFavorite,
  results,
}) {
  const favoriteActivities = results.filter((activity) =>
    favoriteActivitiesList.find(
      (favorivedActivity) =>
        favorivedActivity.id === activity.id && favorivedActivity.isFavorite
    )
  );

  return (
    <>
      {favoriteActivities.length === 0 ? (
        <p>No favorite activities found.</p>
      ) : (
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
      )}
    </>
  );
}
