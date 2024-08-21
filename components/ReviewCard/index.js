import styled from "styled-components";
import UserCard from "@/components/UserCard";
import { Rating } from "react-simple-star-rating";

export default function ReviewCard({ review }) {
  return (
    <StyledReviewCard>
      <UserCard user={review.author} />
      <Rating initialValue={review.rating} readonly />
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
