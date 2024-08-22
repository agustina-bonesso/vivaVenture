import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

export default function ReviewCard({ review }) {
  console.log(review)
  return (
    <StyledReviewCard>
      <StyledUserCard>
        <UserImage
          src={
            review.author.picture
              ? review.author.picture
              : "/images/user_picture.png"
          }
          alt={`${review.author.name}'s profile picture`}
          width={50}
          height={50}
        />
        <UserName>{review.author.name}</UserName>
      </StyledUserCard>
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
const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const UserName = styled.p`
  font-weight: bold;
  color: var(--text-color);
`;
