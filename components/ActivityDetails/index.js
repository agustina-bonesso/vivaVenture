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
import { StyledLink } from "@/components/StyledLinks";
import styled from "styled-components";
import dynamic from "next/dynamic";
import WeatherInformation from "@/components/Weather";
import { useSession } from "next-auth/react";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "../ReviewForm";
import { Modal } from "@/components/Modal";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";
import CreatorCard from "../CreatorCard";
import useSWR from "swr";

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
  const { data: userData } = useSWR(`/api/users`);
  const ratings = activity.reviews?.map((review) => review.rating);
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
          {activity.owner._id === userData._id && (
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
          )}
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
            <Rating initialValue={averageRating} readonly size={30} />
            {averageRating}
            {activity.reviews.length > 0 && (
              <ToggleReviewsButton onClick={() => setShowReviews(!showReviews)}>
                <Icon name={showReviews ? "chevronUp" : "chevronDown"} />
              </ToggleReviewsButton>
            )}
          </AverageRating>
        </ReviewsSummary>
        <ReviewButton
          onClick={() => {
            session
              ? setIsModalOpen(true)
              : toast.info("Please log in to write a review");
          }}
        >
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

        <StyledLink href={`/users/${activity.owner._id}`}>
          <CreatorCard activityOwner={activity.owner} />
        </StyledLink>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 450px) {
    flex-direction: row;
    margin-top: 1rem;
    gap: 1rem;
  }
`;
const ReviewsCount = styled.p`
  margin: 0;
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
  background-color: transparent;
  color: var(--text-color);
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border: 2px solid var(--text-color);
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    border-color: var(--background-color);
  }

  &:active {
    background-color: var(--text-color);
    color: var(--background-color);
    border-color: var(--background-color);
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;
