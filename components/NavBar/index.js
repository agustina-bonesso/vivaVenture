import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";

export default function NavBar({ getRandomActivity }) {
  const router = useRouter();
  return (
    <StyledFooter>
      <StyledLink href="/">
        <StyledNavIcon active={router.pathname === "/"}>
          <Icon name="home" />
          <StyledSubline>Home</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/createActivity">
        <StyledNavIcon active={router.pathname === "/createActivity"}>
          <Icon name="add" color="black" fillColor="transparent" />
          <StyledSubline>Add</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledNavButton
        type="button"
        onClick={() => {
          getRandomActivity();
          router.push("/spotlight");
        }}
      >
        <StyledNavIcon active={router.pathname === "/spotlight"}>
          <Icon name="random" />
          <StyledSubline>Random</StyledSubline>
        </StyledNavIcon>
      </StyledNavButton>

      <StyledLink href="/favorites">
        <StyledNavIcon active={router.pathname === "/favorites"}>
          <Icon name="navHeart" />
          <StyledSubline>Favorites</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
    </StyledFooter>
  );
}

const StyledSubline = styled.div`
  font-size: 11px;
  margin-top: 3px;
`;

const StyledNavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? "var(--teal)" : "var(--icon-color)")};
  stroke: ${(props) => (props.active ? "var(--teal)" : "var(--icon-color)")};
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    color: var(--teal);
    stroke: var(--teal);
  }
`;

const StyledFooter = styled.footer`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background: var(--header-footer-bg);
  box-shadow: var(--box-shadow);

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const StyledNavButton = styled.button`
  all: unset;
  font-family: var(--styled-link);
  font-size: 11px;
`;
