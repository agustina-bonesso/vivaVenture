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
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={40}
        label
        transition
        fillColor="gold"
        emptyColor="gray"
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
