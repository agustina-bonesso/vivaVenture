// pages/users/[id]/index.js

import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user } = useSWR("/api/users");

  return (
    <UserContainer>
      <UserImage
        src={user.picture || "/images/user_picture.png"}
        alt={`${user.name}'s profile picture`}
      />
      <UserName>{user.name}</UserName>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  background: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const UserImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const UserName = styled.h1`
  color: var(--text-color);
`;
