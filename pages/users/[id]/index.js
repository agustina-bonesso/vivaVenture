import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user } = useSWR(`/api/users/${id}`);

  if (!user) return <p>Loading...</p>; // Falls die Daten noch geladen werden

  return (
    <UserContainer>
      <UserImage
        src={user.picture || "/images/user_picture.png"}
        alt={`${user.name}'s profile picture`}
      />
      <UserName>{user.name}</UserName>
      <UserLocation>
        {user.city && user.country
          ? `${user.city}, ${user.country}`
          : "No details provided."}
      </UserLocation>
      <UserAbout>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>{user.aboutMe || "No details provided."}</AboutText>
      </UserAbout>
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
  margin-bottom: 0.5rem;
`;

const UserLocation = styled.p`
  color: var(--secondary-text-color);
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const UserAbout = styled.div`
  width: 100%;
  text-align: left;
`;

const SectionTitle = styled.h2`
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const AboutText = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.5;
`;
