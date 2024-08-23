import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { mutate } from "swr";
import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { toast } from "react-toastify";

export default function ReviewForm({ activityId, onClose }) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }
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
        toast.error("Failed to submit review");
        return;
      }
      mutate(`/api/activities/${activityId}`);
      onClose();
      toast.success("Review submitted");
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
          size={35}
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
        rows="5"
        placeholder="Add your comment here..."
        maxLength={500}
      />
      <StyledButton type="submit">Post</StyledButton>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 250px;
  height: 320px;
  margin: 0.5rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  background: var(--form-background);
  color: var(--text-color);

  @media (min-width: 450px) {
    width: 400px;
    height: 400px;
  }
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
