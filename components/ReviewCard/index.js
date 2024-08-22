import styled from "styled-components";
import { useState } from "react";
import UserCard from "@/components/UserCard";
import { Rating } from "react-simple-star-rating";

export default function ReviewCard({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharacters = 200;

  function toggleReadMore() {
    setIsExpanded(!isExpanded);
  }

  const comment = review?.comment || "";
  const truncatedText =
    comment.length > maxCharacters
      ? comment.substring(0, maxCharacters) + "..."
      : comment;

  return (
    <StyledReviewCard>
      <Header>
        <UserCard user={review.author} />
        <NameAndRating>
          <RatingWrapper>
            <Rating initialValue={review.rating} readonly />
          </RatingWrapper>
        </NameAndRating>
      </Header>
      <Comment>
        {isExpanded ? comment : truncatedText}
        {comment.length > maxCharacters && (
          <ReadMoreButton onClick={toggleReadMore}>
            {isExpanded ? "Show less" : "Read more"}
          </ReadMoreButton>
        )}
      </Comment>
    </StyledReviewCard>
  );
}

const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--box-shadow);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const NameAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-left: 1rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Comment = styled.p`
  font-style: italic;
  color: var(--text-color);
  margin: 0.5rem auto;
  word-break: break-word;
  white-space: pre-wrap;
  @media (min-width: 600px) {
    margin: 0.5rem;
  }
`;

const ReadMoreButton = styled.span`
  color: var(--teal);
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.5rem;
`;
