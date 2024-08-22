import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { StyledList } from "@/styles";
import ActivityCard from "@/components/ActivityCard";
import { useSession } from "next-auth/react";

export default function UserPage({ activityData, onToggleFavorite, userData }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: userProilData } = useSWR(`/api/users/${id}`);
  const { data: session } = useSession();

  if (!userProilData) return <p>Loading...</p>;

  return (
    <UserContainer>
      <UserImage
        src={userProilData.picture || "/images/user_picture.png"}
        alt={`${userProilData.name}'s profile picture`}
      />
      <UserName>{userProilData.name}</UserName>
      <UserLocation>
        {userProilData.city && userProilData.country
          ? `${userProilData.city}, ${userProilData.country}`
          : ""}
      </UserLocation>
      <UserAbout>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>{userProilData.aboutMe || "No details provided."}</AboutText>
      </UserAbout>
      <StyledList>
        {activityData
          .filter((activity) => activity.owner === id)
          .map((userActivity) => (
            <ActivityCard
              key={userActivity._id}
              activity={userActivity}
              onToggleFavorite={onToggleFavorite}
              isFavorite={
                session
                  ? (userData?.favorites ?? []).includes(userActivity._id)
                  : false
              }
            />
          ))}
      </StyledList>
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
