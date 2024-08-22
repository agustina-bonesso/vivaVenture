import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import MiniActivityCard from "@/components/MiniActivityCard";
import ActivityCard from "@/components/ActivityCard";

export default function UserPage({ activityData, onToggleFavorite, userData }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: userProfileData } = useSWR(`/api/users/${id}`);
  const { data: session } = useSession();

  if (!userProfileData) return <p>Loading...</p>;

  return (
    <StyledArticle>
      <UserImage
        src={userProfileData.picture || "/images/user_picture.png"}
        alt={`${userProfileData.name}'s profile picture`}
      />
      <UserName>{userProfileData.name}</UserName>
      {userProfileData.city && userProfileData.country && (
        <UserLocation>
          {`${userProfileData.city}, ${userProfileData.country}`}
        </UserLocation>
      )}

      {userProfileData.aboutMe && (
        <>
          <SectionTitle>About me:</SectionTitle>
          <AboutText>{userProfileData.aboutMe}</AboutText>
        </>
      )}
      <SectionTitle>Other Activities:</SectionTitle>
      <StyledList>
        {activityData
          .filter((activity) => activity.owner === id)
          .map((userActivity) => (
            <li key={userActivity._id}>
              <MiniActivityCard
                key={userActivity._id}
                activity={userActivity}
                onToggleFavorite={onToggleFavorite}
                isFavorite={
                  session &&
                  (userData?.favorites ?? []).includes(userActivity._id)
                }
              />
            </li>
          ))}
      </StyledList>
    </StyledArticle>
  );
}
const StyledArticle = styled.article`
  max-width: 50rem;
  margin: 2rem auto 5rem auto;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background: var(--card-background);
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0 auto 10rem auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 450px);
    gap: 1.2rem;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem auto;
  min-height: 15.625rem;
  max-height: 15.625rem;
  overflow: hidden;
`;

const UserName = styled.h1`
  color: var(--text-color);
  margin-bottom: 0.5rem;
  align-self: center;
`;

const UserLocation = styled.p`
  color: var(--secondary-text-color);
  font-size: 1rem;
  align-self: center;
`;

const SectionTitle = styled.p`
  color: var(--text-color);
  font-size: 18px;
  align-self: start;
  margin-left: 0.5rem;
`;

const AboutText = styled.p`
  color: var(--teal);
  font-size: 1rem;
  line-height: 1.5;
  margin-left: 0.5rem;
`;
