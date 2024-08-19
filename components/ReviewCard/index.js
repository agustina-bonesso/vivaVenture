import React from "react";
import styled from "styled-components";
import { Icon } from "@/components/Icon";
import UserCard from "@/components/UserCard";

export default function ReviewCard({ review }) {
  return (
    <StyledReviewCard>
      <ReviewHeader>
        <UserCard user={review.author} />
        <Rating>
          {[...Array(review.rating)].map((_, index) => (
            <Icon key={index} name="star" color="gold" fillColor="#FFD700" />
          ))}
        </Rating>
      </ReviewHeader>
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--box-shadow);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.div`
  display: flex;
`;
