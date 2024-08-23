import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import MiniActivityCard from "@/components/MiniActivityCard";
import ActivityCard from "@/components/ActivityCard";
import { TransparentBackButton } from "@/components/StyledButton";
import { Icon } from "@/components/Icon";

export default function UserPage({ activityData, onToggleFavorite, userData }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: userProfileData } = useSWR(`/api/users/${id}`);
  const { data: session } = useSession();

  if (!userProfileData) return <p>Loading...</p>;

  return (
    <StyledArticle>
      <TransparentBackButton
        onClick={() => router.back()}
        title="Back to all Activities"
      >
        <Icon name="chevronLeft" color="black" />
      </TransparentBackButton>
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
        <AboutMeSection>
          <Title>About me:</Title>
          <AboutText>{userProfileData.aboutMe}</AboutText>
        </AboutMeSection>
      )}
      <CreatedActvitiesTitle>Created Activities:</CreatedActvitiesTitle>
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
  position: relative;
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

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 250px);
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 300px);
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

const AboutMeSection = styled.div`
  display: flex;
  max-width: 90%;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background: var(--background-color);
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  transition: box-shadow 0.3s ease;
`;

const Title = styled.p`
  color: var(--text-color);
  font-size: 18px;
  align-items: center;
`;

const CreatedActvitiesTitle = styled.p`
  color: var(--text-color);
  font-size: 18px;
  align-items: center;
  margin-left: 3.7rem;
`;

const AboutText = styled.p`
  color: var(--teal);
  font-size: 1rem;
  line-height: 1.5;
`;
