import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import { mutate } from "swr";

export default function StarRating({ activityId }) {
  const [rating, setRating] = useState(0);

  const handleRating = async (rate) => {
    setRating(rate);
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId,
          rating: rate,
        }),
      });
      if (!response.ok) {
        console.error("Failed to submit rating");
        toast.error("Failed to submit review");
      }
      mutate(`/api/activities/${activityId}`);
      toast.success("Review submitted");
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };
  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={40}
        label
        transition
        fillColor="gold"
        emptyColor="gray"
        onPointerLeave={0}
      />
    </div>
  );
}
