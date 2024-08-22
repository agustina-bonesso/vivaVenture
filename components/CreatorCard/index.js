import styled from "styled-components";
import Image from "next/image";

export default function CreatorCard({ activityOwner }) {
  return (
    <StyledCreatorCard>
      <Heading>Who Greets You</Heading>
      <CreatorInfo>
        <CreatorImage
          src={activityOwner.picture ? activityOwner.picture : "/images/user_picture.png"}
          alt={`${activityOwner.name}'s profile picture`}
          width={60}
          height={60}
        />
        <CreatorDetails>
          <CreatorName>{activityOwner.name}</CreatorName>
          {activityOwner.city && activityOwner.country && (
            <Location>{activityOwner.city}, {activityOwner.country}</Location>
          )}
        </CreatorDetails>
      </CreatorInfo>
    </StyledCreatorCard>
  );
}

const StyledCreatorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 1rem;
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CreatorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreatorImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #f1f1f1;
`;

const CreatorName = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #333333;
  margin: 0;
`;

const Location = styled.p`
  font-size: 0.875rem;
  color: #717171;
  margin: 0;
`;
