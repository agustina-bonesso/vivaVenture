import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";
import Login from "../Login";
import { useSession } from "next-auth/react";

export default function NavLinks({
  getRandomActivity,
  closeMenu,
  showSubline,
}) {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <StyledLink href="/">
        <StyledNavIcon $isActive={router.pathname === "/"}>
          <Icon name="home" />
          {showSubline && (
            <StyledSubline onClick={closeMenu}>Home</StyledSubline>
          )}
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/createActivity">
        <StyledNavIcon $isActive={router.pathname === "/createActivity"}>
          <Icon name="add" color="black" fillColor="transparent" />
          {showSubline && (
            <StyledSubline onClick={closeMenu}>Add</StyledSubline>
          )}
        </StyledNavIcon>
      </StyledLink>
      <StyledNavButton
        type="button"
        onClick={() => {
          getRandomActivity();
          router.push("/spotlight");
          if (closeMenu) closeMenu();
        }}
      >
        <StyledNavIcon $isActive={router.pathname === "/spotlight"}>
          <Icon name="random" />
          {showSubline && (
            <StyledSubline onClick={closeMenu}>Random</StyledSubline>
          )}
        </StyledNavIcon>
      </StyledNavButton>
      <StyledLink href="/favorites">
        <StyledNavIcon $isActive={router.pathname === "/favorites"}>
          <Icon name="navHeart" />
          {showSubline && (
            <StyledSubline onClick={closeMenu}>Favorites</StyledSubline>
          )}
        </StyledNavIcon>
      </StyledLink>
      <StyledNavIcon>
        <Login showSubline={false}/>
      </StyledNavIcon>
    </>
  );
}

const StyledSubline = styled.div`
  font-size: 16px;
  margin-top: 3px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const StyledNavButton = styled.button`
  all: unset;
  font-family: var(--styled-link);
  font-size: 16px;
`;

const StyledNavIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  stroke: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  transition: color 0.2s;
  font-family: var(--styled-link);
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: var(--teal);
    stroke: var(--teal);
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    line-height: 2.1;
    padding: 0 0 0.625rem 0.625rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
