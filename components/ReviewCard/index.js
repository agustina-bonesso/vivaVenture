import styled from "styled-components";
import { Icon } from "@/components/Icon";
import UserCard from "@/components/UserCard";

export default function ReviewCard({ review }) {
  return (
    <StyledReviewCard>
      <UserCard user={review.author} />
      <Review>
        {[...Array(review.rating)].map((_, index) => (
          <Icon key={index} name="star" fillColor="gold" />
        ))}
        <span>{review.comment}</span>
      </Review>
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--box-shadow);
`;

const Review = styled.div`
  display: flex;
`;
