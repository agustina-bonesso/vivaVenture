import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { mutate } from "swr";
import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";

export default function ReviewForm({ activityId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId,
          rating,
          comment,
        }),
      });
      if (!response.ok) {
        console.error("Failed to submit review");
      }
      mutate(`/api/activities/${activityId}`);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={40}
          label
          transition
          fillColor="gold"
          emptyColor="gray"
        />
      </div>
      <StyledLabel htmlFor="comment">Comment</StyledLabel>
      <StyledTextarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Add comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <StyledButton type="submit">Post</StyledButton>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  background: var(--form-background);
  color: var(--text-color);
`;
const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--form-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--background-color);
  resize: vertical;
  &:hover {
    border-color: var(--light-orange);
  }
  &:focus-within {
    border-color: var(--light-orange);
    outline: none;
  }
`;
const StyledLabel = styled.label`
  font-weight: bold;
  margin-top: 0.8rem;
  font-family: var(--font-h1);
  font-size: 1.125rem;
`;
