import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function NavBar() {
  return (
    <StyledFooter>
      <StyledLink href="/">
        <StyledNavIcon>
          <Icon name="home"  />
          <StyledSubline>Home</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/createActivity">
        <StyledNavIcon>
          <Icon name="add" color="black" fillColor="none" />
          <StyledSubline>Add</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="">
        <StyledNavIcon>
          <Icon name="shuffle" color="black" fillColor="none" />
          <StyledSubline>Random</StyledSubline>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/favorites">
        <StyledNavIcon>
          <Icon name="heart" color="black" fillColor="none" />
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
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    color: var(--teal) ;
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
