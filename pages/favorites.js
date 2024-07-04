import styled from "styled-components";
import ActivityCard from "@/components/ActivityCard";

export default function Favorites({
  activityData,
  favoriteActivitiesList,
  onToggleFavorite,
}) {
  const favoriteActivitiesID = favoriteActivitiesList
    .filter((activity) => activity.isFavorite)
    .map((activity) => {
      return activity.id;
    });

  const favoriteActivitiesData = activityData.filter((activity) => {
    return favoriteActivitiesID.includes(activity.id);
  });

  return (
    <StyledList>
      {favoriteActivitiesData.map((activity) => {
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
