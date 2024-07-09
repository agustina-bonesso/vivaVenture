import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
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
          <Icon name="add" />
          <StyledSubline>Add</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="">
        <StyledNavIcon active={router.pathname === "/spotlight"}>
          <Icon name="shuffle" />
          <StyledSubline>Random</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/favorites">
        <StyledNavIcon active={router.pathname === "/favorites"}>
          <Icon name="heart" />
          <StyledSubline>Saved</StyledSubline>
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
  border: 0;
  color: ${(props) => (props.active ? "var(--teal)" : "black")};
  stroke: ${(props) => (props.active ? "var(--teal)" : "black")};
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

  @media (max-width: );
`;
