import React from "react";
import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";
import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { TransparentFavoriteButton } from "@/components/StyledButton";
import { useSession } from "next-auth/react";

export default function MiniActivityCard({
  activity,
  onToggleFavorite,
  isFavorite,
}) {
  const { data: session } = useSession();

  return (
    <StyledArticle>
      <ImageContainer>
        <StyledImageComponent images={activity.images} alt={activity.title} />
        {session && (
          <StyledFavoriteButton
            onClick={() => {
              onToggleFavorite(activity._id);
            }}
          >
            <Icon
              name="heart"
              fillColor={isFavorite ? "red" : "white"}
              color="black"
            />
          </StyledFavoriteButton>
        )}
      </ImageContainer>
      <StyledLink href={`/${activity._id}`}>
        <CardContent>
          <Title>{activity.title}</Title>
          <Info>{`${activity.city}, ${activity.country}`}</Info>
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
  max-width: 18rem;
  margin: 0.5rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--card-background);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.25rem);
    button {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 8rem;
  max-height: 12rem;
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

const StyledFavoriteButton = styled(TransparentFavoriteButton)`
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const CardContent = styled.div`
  padding: 0.75rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: var(--text-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Info = styled.p`
  font-size: 0.875rem;
  color: var(--brown);
  margin: 0 0 0.5rem 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Tag = styled.span`
  background: var(--light-orange);
  color: black;
  padding: 0.2rem 0.4rem;
  border-radius: var(--border-radius);
  font-size: 0.7rem;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
`;
