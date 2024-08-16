import { useSession } from "next-auth/react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function StarRating({ activityId }) {
  const { data: session } = useSession();
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
        //  author: session?.user?.id,
        }),
      });

      if (!response.ok) {
        console.error("Failed to submit rating");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={25}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
      />
    </div>
  );
}
