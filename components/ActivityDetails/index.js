import StyledImageComponent from "@/components/StyledImageComponent";
import { Icon } from "@/components/Icon";
import styled from "styled-components";
import {
  StyledButton,
  TransparentBackButton,
  TransparentFavoriteButton,
} from "@/components/StyledButton";
import { StyledEditLink } from "@/components/StyledLinks";
import { useRouter } from "next/router";

export default function ActivityDetails({
  activity,
  onDeleteActivity,
  isFavorite,
  onToggleFavorite,
}) {
  const router = useRouter();
  console.log(activity.images);
  const imagesrc = activity.images[0];
  console.log(imagesrc);

  return (
    <StyledArticle>
      <ImageContainer>
        <TransparentBackButton
          onClick={() => {
            router.back();
          }}
          title="Back to all Activities"
        >
          <Icon name="chevronLeft" color="black" />
        </TransparentBackButton>
        <TransparentFavoriteButton
          onClick={() => onToggleFavorite(activity.id)}
        >
          <Icon
            name="heart"
            fillColor={isFavorite ? "red" : "white"}
            color="black"
          />
        </TransparentFavoriteButton>
        <StyledImageComponent
          src={imagesrc}
          alt={activity.title}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          id={activity.id}
        />
      </ImageContainer>
      <Content>
        <StyledDiv>
          <Title>{activity.title}</Title>
          <ActionIcons>
            <StyledEditLink
              title="Edit activity"
              type="button"
              $variant="edit"
              href={`/${activity.id}/edit`}
            >
              <Icon name="edit" />
            </StyledEditLink>
            <StyledButton
              title="Delete activity"
              type="button"
              $variant="delete"
              onClick={() => onDeleteActivity(activity.id)}
            >
              <Icon name="delete" />
            </StyledButton>
          </ActionIcons>
        </StyledDiv>

        <Info>{`${activity.area}, ${activity.country}`}</Info>
        <Description>{activity.description}</Description>
        <CategoryTags>
          {activity.category.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </CategoryTags>
      </Content>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: var(--card-background);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12.5rem;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.625rem;
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: var(--text-color);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Info = styled.p`
  font-size: 1rem;
  color: var(--brown);
  margin-top: 0.3125rem;
`;

const Description = styled.p`
  margin-top: 0.625rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--teal);
`;

const CategoryTags = styled.div`
  margin-top: 0.625rem;
  display: flex;
  gap: 0.3125rem;
`;

const Tag = styled.span`
  background: var(--light-orange);
  color: black;
  padding: 0.3125rem 0.625rem;
  border-radius: var(--border-radius);
`;
