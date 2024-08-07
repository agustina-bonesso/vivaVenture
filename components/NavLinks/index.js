import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";

export default function NavLinks({ getRandomActivity, closeMenu }) {
  const router = useRouter();

  return (
    <>
      <StyledLink href="/">
        <StyledNavIcon $isActive={router.pathname === "/"}>
          <Icon name="home" />
          <StyledSubline onClick={closeMenu}>Home</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/createActivity">
        <StyledNavIcon $isActive={router.pathname === "/createActivity"}>
          <Icon name="add" color="black" fillColor="transparent" />
          <StyledSubline onClick={closeMenu}>Add</StyledSubline>
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
          <StyledSubline onClick={closeMenu}>Random</StyledSubline>
        </StyledNavIcon>
      </StyledNavButton>
      <StyledLink href="/favorites">
        <StyledNavIcon $isActive={router.pathname === "/favorites"}>
          <Icon name="navHeart" />
          <StyledSubline onClick={closeMenu}>Favorites</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
    </>
  );
}

const StyledSubline = styled.div`
  font-size: 16px;
  margin-top: 3px;
  @media (min-width: 768px) {
    font-size: 24px;
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
  color: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  stroke: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--teal);
    stroke: var(--teal);
  }
   flex-direction: column;
  @media (min-width: 768px) {
    gap: 1.5rem;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    line-height: 2.1;
    padding: 0 0 0.625rem 0.625rem;
    gap: 1.5rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
