import styled from "styled-components";
import ActivityCard from "@/components/ActivityCard";

export default function Favorites({
  favoriteActivitiesList,
  onToggleFavorite,
}) {
  return (
    <StyledList>
      {favoriteActivitiesList.map((activity) => {
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

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;
