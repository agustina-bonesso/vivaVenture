import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Image from "next/image";
import { Icon } from "../Icon";

export default function Login() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      toast.success(`Welcome, ${session.user.name}!`);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <ImageWrapper>
            <StyledImage
              src={session.user.image}
              alt="user-icon"
              fill
              sizes="(max-width: 600px) 30px, (max-width: 1200px) 40px"
              priority
            />
          </ImageWrapper>
        </button>
      </>
    );
  }

  return (
    <StyledNavButton onClick={() => signIn()}>
      <Icon name="userIcon" />
    </StyledNavButton>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
`;
const StyledNavButton = styled.button`
  all: unset;
  font-family: var(--styled-link);
  font-size: 16px;
`;
