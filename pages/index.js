import ActivityCard from "@/components/ActivityCard";
import Link from "next/link";
import styled from "styled-components";
import { Icon } from "@/components/Icon";

export default function HomePage({
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  return (
    <>
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
      <StyledLinkContainer>
        <StyledFixLink href="/createActivity">
          <Icon name="add" fillColor="white" />
        </StyledFixLink>
      </StyledLinkContainer>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledFixLink = styled(Link)`
  position: fixed;
  bottom: 1.875rem;
`;
