import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router"; // Importiere useRouter
import { Icon } from "../Icon";

export default function Login({ showSubline }) {
  const { data: session } = useSession();
  const [hasShownToast, setHasShownToast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Initialisiere useRouter

  useEffect(() => {
    if (session && !hasShownToast) {
      toast.success(`Welcome, ${session.user.name}!`);
      setHasShownToast(true);
    }
  }, [session, hasShownToast]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    signOut();
    setMenuOpen(false);
  };

  const handleSignIn = () => {
    signIn();
    setMenuOpen(false);
  };

  const goToProfile = () => {
    router.push("/login"); // Route zur login.js Seite
    setMenuOpen(false); // Schließe das Menü
  };

  return (
    <StyledNavIcon>
      {session ? (
        <StyledNavButton onClick={toggleMenu}>
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
        <StyledNavButton onClick={toggleMenu}>
          <Icon name="userIcon" />
        </StyledNavButton>
      )}
      {showSubline && (
        <StyledSubline>{session ? "Logout" : "Login"}</StyledSubline>
      )}
      {menuOpen && (
        <DropdownMenu>
          {session ? (
            <>
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
              <MenuItem onClick={goToProfile}>MyProfile</MenuItem>{" "}
            </>
          ) : (
            <MenuItem onClick={handleSignIn}>Login</MenuItem>
          )}
        </DropdownMenu>
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
  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
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
  position: relative;

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

const DropdownMenu = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: var(--icon-color);
  &:hover {
    background: var(--light-grey);
  }
`;
