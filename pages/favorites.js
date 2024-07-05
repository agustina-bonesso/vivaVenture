import styled from "styled-components";
import ActivityCard from "@/components/ActivityCard";

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

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;
