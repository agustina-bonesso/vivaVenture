import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";
import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { TransparentFavoriteButton } from "@/components/StyledButton";

export default function ActivityCard({
  activity,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledArticle>
      <StyledLink href={`/${activity.id}`}>
        <ImageContainer>
          <StyledImageComponent src={activity.image} alt={activity.title} />
          <StyledFavoriteButton
            onClick={(event) => {
              event.preventDefault();
              onToggleFavorite(activity.id);
            }}
          >
            <Icon
              name="heart"
              fillColor={isFavorite ? "red" : "white"}
              color="black"
            />
          </StyledFavoriteButton>
        </ImageContainer>
        <CardContent>
          <Title>{activity.title}</Title>
          <Info>{`${activity.area}, ${activity.country}`}</Info>
          <CategoryTags>
            {activity.category.map((category, index) => (
              <Tag key={index}>{category}</Tag>
            ))}
          </CategoryTags>
        </CardContent>
      </StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--card-background);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.3125rem);
    button {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 12.5rem;
  max-height: 25rem;
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

const StyledFavoriteButton = styled(TransparentFavoriteButton)`
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const Title = styled.h2`
  color: var(--text-color);
`;

const Info = styled.p`
  color: var(--brown);
  margin: 0 0 0.625rem 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
`;

const Tag = styled.span`
  background: var(--light-orange);
  color: black;
  padding: 0.3125rem 0.625rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;

  @media (max-width: 767px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
  }
`;
