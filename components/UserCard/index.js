import styled from "styled-components";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <StyledUserCard>
      <UserImage
        src={user.picture ? user.picture : "/images/user_picture.png"}
        alt={`${user.name}'s profile picture`}
        width={50}
        height={50}
      />
      <UserName>{user.name}</UserName>
    </StyledUserCard>
  );
}

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
