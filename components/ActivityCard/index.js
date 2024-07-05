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
    <StyledArticle>
      <StyledLink href={`/${activity.id}`}>
        <ImageContainer>
          <StyledImageComponent src={activity.image} alt={activity.title} />
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

      <StyledFavoriteButton onClick={() => onToggleFavorite(activity.id)}>
        <Icon name="heart" fillColor={isFavorite ? "red" : "black"} />
      </StyledFavoriteButton>
    </StyledArticle>
  );
}

const StyledFavoriteButton = styled.button`
  width: 3.75rem;
`;

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
  }
`;

const ImageContainer = styled.div`
  height: 12.5rem;
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: var(--text-color);
`;

const Info = styled.p`
  font-size: 1rem;
  color: var(--brown);
  margin: 0 0 0.625rem 0;
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
`;
