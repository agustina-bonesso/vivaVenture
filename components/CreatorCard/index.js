import styled from "styled-components";
import Image from "next/image";

export default function CreatorCard({ user }) {
  return (
    <StyledCreatorCard>
      <Heading>Created by</Heading>
      <CreatorInfo>
        <CreatorImage
          src={user.picture ? user.picture : "/images/user_picture.png"}
          alt={`${user.name}'s profile picture`}
          width={50}
          height={50}
        />
        <CreatorName>{user.name}</CreatorName>
      </CreatorInfo>
    </StyledCreatorCard>
  );
}

const StyledCreatorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const Heading = styled.h3`
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CreatorImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const CreatorName = styled.p`
  font-weight: bold;
  color: var(--text-color);
`;
