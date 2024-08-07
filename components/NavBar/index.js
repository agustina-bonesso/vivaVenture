import styled from "styled-components";
import { StyledLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";
import NavLinks from "../NavLinks";

export default function NavBar({ getRandomActivity }) {
  const router = useRouter();
  return (
    <StyledFooter>
      <NavLinks getRandomActivity={getRandomActivity}></NavLinks>
    </StyledFooter>
  );
}

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
  z-index: 500;

  @media (min-width: 768px) {
    display: none;
  }
`;

