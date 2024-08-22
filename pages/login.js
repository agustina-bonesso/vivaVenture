import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import { Icon } from "../components/Icon";
import UserForm from "@/components/UserForm";
import { Modal } from "@/components/Modal";
import { ModalButton, StyledButton } from "@/components/StyledButton";
import { useState } from "react";
import useSWR from "swr";

export default function LoginPage() {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: userData } = useSWR(`/api/users`);

  return (
    <Container>
      {session ? (
        <>
          <ProfileCard>
            <ProfileImageWrapper>
              <StyledImage
                src={session.user.image}
                alt={session.user.name}
                fill
                sizes="(max-width: 600px) 150px, (max-width: 1200px) 200px"
                priority
              />
            </ProfileImageWrapper>
            <ProfileDetails>
              <UserName>{session.user.name}</UserName>
              <UserEmail>{session.user.email}</UserEmail>
              <UserLocation>
                {userData.city && userData.country
                  ? `${userData.city}, ${userData.country}`
                  : "No details provided."}
              </UserLocation>
              <UserAbout>
                <SectionTitle>About Me</SectionTitle>
                <AboutText>{userData.aboutMe || "No details provided."}</AboutText>
              </UserAbout>
              <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
            </ProfileDetails>
            <StyledButton
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Edit your Profile
            </StyledButton>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              header="Edit your Profile"
              footer={
                <ModalButton onClick={() => setIsModalOpen(false)}>
                  Close
                </ModalButton>
              }
            >
              <UserForm initialUserData={userData} />
            </Modal>
          </ProfileCard>
        </>
      ) : (
        <LoginCard>
          <p>You are not signed in</p>
          <SignInButton onClick={() => signIn()}>
            <Icon name="userIcon" />
            Sign In
          </SignInButton>
        </LoginCard>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 1.5rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileDetails = styled.div`
  text-align: center;
`;

const UserName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const UserEmail = styled.p`
  margin: 0.5rem 0;
  color: #555;
`;

const SignOutButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SignInButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #005bb5;
  }

  svg {
    width: 24px;
    height: 24px;
  }
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
