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
  const { data: profilData } = useSWR(`/api/users`);
  return (
    <Container>
      {session ? (
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
              {profilData.city && profilData.country
                ? `${profilData.city}, ${profilData.country}`
                : "No details provided."}
            </UserLocation>
            {profilData.aboutMe && (
              <UserAbout>
                <SectionTitle>About Me:</SectionTitle>
                <AboutText>
                  {profilData.aboutMe || "No details provided."}
                </AboutText>
              </UserAbout>
            )}
          </ProfileDetails>
          <EditProfileButton
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Edit your Profile
          </EditProfileButton>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            header="My Profile"
            footer={
              <ModalButton onClick={() => setIsModalOpen(false)}>
                Close
              </ModalButton>
            }
          >
            <UserForm
              initialUserData={profilData}
              onClose={() => setIsModalOpen(false)}
            />
          </Modal>
          <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton>
        </ProfileCard>
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
  margin: auto;
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
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
`;
const UserEmail = styled.p`
  margin: 0.5rem 0;
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
  color: var(--brown);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const UserAbout = styled.div`
  width: auto;
  text-align: left;
`;
const SectionTitle = styled.p`
  line-height: 1.6;
  color: var(--text-color);
`;
const AboutText = styled.p`
  color: var(--teal);
  font-size: 1rem;
  line-height: 1.5;
`;
const EditProfileButton = styled.button`
  background-color: transparent;
  color: var(--text-color);
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border: 2px solid var(--text-color);
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
  &:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    border-color: var(--background-color);
  }
  &:active {
    background-color: var(--text-color);
    color: var(--background-color);
    border-color: var(--background-color);
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;
