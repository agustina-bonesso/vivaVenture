import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import styled from "styled-components";
import CategoryIcons from "@/components/CategoryIcons";

export default function HomePage({
  onToggleFavorite,
  favoriteActivitiesList,
  results,
  onSelect,
  selectedCategory,
}) {
  return (
    <>
      <CategoryIcons onSelect={onSelect} selectedCategory={selectedCategory} />
      <StyledList>
        {results.map((activity) => {
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
    </>
  );
}

const SearchAndIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`;
