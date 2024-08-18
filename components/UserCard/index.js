import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <StyledUserCard>
      <UserImage
        src={
          user.picture
            ? user.picture
            : "/images/user_picture.png"
        }
        alt={`${user.name}'s profile picture`}
        width={100}
        height={100}
      />
      <UserName>{user.name}</UserName>
    </StyledUserCard>
  );
}

const StyledUserCard = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const UserName = styled.p`
  font-weight: bold;
  color: var(--text-color);
`;
