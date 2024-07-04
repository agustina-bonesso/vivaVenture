import styled from "styled-components";
import ActivityCard from "@/components/ActivityCard";

export default function Favorites({
  activityData,
  favoriteActivitiesList,
  onToggleFavorite,
}) {
  const favoriteActivities = favoriteActivitiesList
    .filter((activity) => activity.isFavorite)
    .map((activity) => {
      return activityData.find(
        (filteredActivity) => filteredActivity.id === activity.id
      );
    });

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
