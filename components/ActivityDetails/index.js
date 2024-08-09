import React from "react";
import { useRouter } from "next/router";
import StyledImageComponent from "@/components/StyledImageComponent";
import { Icon } from "@/components/Icon";
import {
  StyledButton,
  TransparentBackButton,
  TransparentFavoriteButton,
} from "@/components/StyledButton";
import { StyledEditLink } from "@/components/StyledLinks";
import styled from "styled-components";
import dynamic from "next/dynamic";
import WeatherInformation from "@/components/Weather";
import { useSession } from "next-auth/react";

const MapComponent = dynamic(() => import("@/components/Map"), { ssr: false });

export default function ActivityDetails({
  activity,
  onDeleteActivity,
  isFavorite,
  onToggleFavorite,
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const images = activity.images;
  return (
    <StyledArticle>
      <ImageContainer>
        <TransparentBackButton
          onClick={() => {
            router.push("/");
          }}
          title="Back to all Activities"
        >
          <Icon name="chevronLeft" color="black" />
        </TransparentBackButton>
        {session && (
          <TransparentFavoriteButton
            onClick={() => onToggleFavorite(activity._id, session)}
          >
            <Icon
              name="heart"
              fillColor={isFavorite ? "red" : "white"}
              color="black"
            />
          </TransparentFavoriteButton>
        )}

        <StyledImageComponent images={images} alt={activity.title} />
      </ImageContainer>
      <Content>
        <StyledDiv>
          <Title>{activity.title}</Title>
          <ActionIcons>
            <StyledEditLink
              title="Edit activity"
              type="button"
              $variant="edit"
              href={`/${activity._id}/edit`}
            >
              <Icon name="edit" />
            </StyledEditLink>
            <StyledButton
              title="Delete activity"
              type="button"
              $variant="delete"
              onClick={onDeleteActivity}
            >
              <Icon name="delete" />
            </StyledButton>
          </ActionIcons>
        </StyledDiv>

        <Info>{`${activity.city}, ${activity.country}`}</Info>
        <Description>{activity.description}</Description>
        <CategoryTags>
          {activity.category.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </CategoryTags>
        <MapComponent lat={activity.lat} lng={activity.lng} />
        <WeatherInformation activity={activity} />
      </Content>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  max-width: 50rem;
  margin: 2rem auto 5rem auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: var(--card-background);
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 30rem;
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
  color: var(--text-color);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Info = styled.p`
  color: var(--brown);
  margin-top: 0.3125rem;
`;

const Description = styled.p`
  margin-top: 0.625rem;
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
