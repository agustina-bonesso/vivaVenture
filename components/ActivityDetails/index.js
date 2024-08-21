import { useState } from "react";
import { useRouter } from "next/router";
import StyledImageComponent from "@/components/StyledImageComponent";
import { Icon } from "@/components/Icon";
import {
  ModalButton,
  StyledButton,
  TransparentBackButton,
  TransparentFavoriteButton,
} from "@/components/StyledButton";
import { StyledEditLink } from "@/components/StyledLinks";
import styled from "styled-components";
import dynamic from "next/dynamic";
import WeatherInformation from "@/components/Weather";
import { useSession } from "next-auth/react";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "../ReviewForm";
import { Modal } from "@/components/Modal";
import CreatorCard from "../CreatorCard";
import Link from "next/link";

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
  const [showReviews, setShowReviews] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ratings = activity.reviews.map((review) => review.rating);
  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((a, b) => a + b) / ratings.length).toFixed(1)
      : 0;
  return (
    <StyledArticle>
      <ImageContainer>
        <TransparentBackButton
          onClick={() => router.push("/")}
          title="Back to all Activities"
        >
          <Icon name="chevronLeft" color="black" />
        </TransparentBackButton>
        {session && (
          <TransparentFavoriteButton
            onClick={() => onToggleFavorite(activity._id)}
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
              href={session ? `/${activity._id}/edit` : `/login`}
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
        <ReviewsSummary>
          <ReviewsCount>
            {activity.reviews.length} Review
            {activity.reviews.length > 1 ? "s" : ""}
          </ReviewsCount>
          <AverageRating>
            / {averageRating} <Icon name="star" fillColor="gold" />
          </AverageRating>
          {activity.reviews.length > 0 && (
            <ToggleReviewsButton onClick={() => setShowReviews(!showReviews)}>
              <Icon name={showReviews ? "chevronUp" : "chevronDown"} />
            </ToggleReviewsButton>
          )}
        </ReviewsSummary>
        {session && (
          <>
            <ReviewButton onClick={() => setIsModalOpen(true)}>
              Write a Review
            </ReviewButton>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              header="Write a Review"
              footer={
                <ModalButton onClick={() => setIsModalOpen(false)}>
                  Close
                </ModalButton>
              }
            >
              <ReviewForm
                activityId={activity._id}
                onClose={() => setIsModalOpen(false)}
              />
            </Modal>
          </>
        )}
        {activity.reviews.length > 0 ? (
          showReviews &&
          activity.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))
        ) : (
          <NoReviewsMessage>No reviews yet</NoReviewsMessage>
        )}
        <MapComponent lat={activity.lat} lng={activity.lng} />
        <WeatherInformation activity={activity} />

        <Link href={`/users/${activity.owner._id}`}>
          <CreatorCard user={activity.owner} />
        </Link>
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
  margin: 1rem 0;
  display: flex;
  gap: 0.3125rem;
`;
const Tag = styled.span`
  background: var(--light-orange);
  color: black;
  padding: 0.3125rem 0.625rem;
  border-radius: var(--border-radius);
`;
const ReviewsSummary = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const ReviewsCount = styled.p`
  font-weight: bold;
  color: var(--text-color);
`;
const AverageRating = styled.p`
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const NoReviewsMessage = styled.p`
  margin-top: 1rem;
  color: var(--text-color);
  font-style: italic;
`;
const ToggleReviewsButton = styled.button`
  all: unset;
`;
const ReviewButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #ff3b3b;
    transform: translateY(0);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(255, 107, 107, 0.5);
  }
`;
