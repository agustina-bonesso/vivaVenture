import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";
import styled from "styled-components";
import { Icon } from "@/components/Icon";

export default function ActivityCard({
  activity,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <article>
      <StyledLink href={`/${activity.id}`}>
        <StyledImageComponent src={activity.image} alt={activity.title} />
        <h2>{activity.title}</h2>
      </StyledLink>
      <StyledFavoriteButton onClick={() => onToggleFavorite(activity.id)}>
        <Icon name="heart" fillColor={isFavorite ? "red" : "black"} />
      </StyledFavoriteButton>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        {/* <p>{activity.category.join(", ")}</p> */}
      </div>
    </article>
  );
}

const StyledFavoriteButton = styled.button`
  width: 3.75rem;
`;
