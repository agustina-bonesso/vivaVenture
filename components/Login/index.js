import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Image from "next/image";
import { Icon } from "../Icon";

export default function Login({ showSubline = true }) {
  const { data: session } = useSession();
  const [hasShownToast, setHasShownToast] = useState(false);
  useEffect(() => {
    if (session && !hasShownToast) {
      toast.success(`Welcome, ${session.user.name}!`);
      setHasShownToast(true);
    }
  }, [session, hasShownToast]);

  return (
    <StyledNavIcon>
      {session ? (
        <StyledNavButton onClick={() => signOut()}>
          <ImageWrapper>
            <StyledImage
              src={session.user.image}
              alt="user-icon"
              fill
              sizes="(max-width: 600px) 30px, (max-width: 1200px) 40px"
              priority
            />
          </ImageWrapper>
        </StyledNavButton>
      ) : (
        <StyledNavButton onClick={() => signIn()}>
          <Icon name="userIcon" />
        </StyledNavButton>
      )}
      {showSubline && (
        <StyledSubline>{session ? "Logout" : "Login"}</StyledSubline>
      )}
    </StyledNavIcon>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const StyledNavButton = styled.button`
  all: unset;
  font-family: var(--styled-link);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--icon-color);
  transition: color 0.2s;
  font-family: var(--styled-link);
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: var(--teal);
  }

  @media (min-width: 768px) {
    gap: 1.25rem;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    line-height: 2.1;
    padding: 0 0 0.625rem 0.625rem;
    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

const StyledSubline = styled.div`
  font-size: 16px;
  margin-top: -1px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
