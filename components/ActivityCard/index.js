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
  console.log(activity.images);
  const imagessrc = activity.images[0];
  console.log(imagessrc);
  return (
    <StyledArticle>
      <StyledLink href={`/${activity.id}`}>
        <ImageContainer>
          <StyledImageComponent src={imagessrc} alt={activity.title} />
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
  height: 12.5rem;
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
