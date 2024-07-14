import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLink href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={100}
          height={70}
          priority
        />
      </StyledLink>
      <div>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={30} />
        {menuOpen && (
          <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </div>
      <Overlay isActive={menuOpen} onClick={() => setMenuOpen(false)} />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 20;
  background-color: var(--header-footer-bg);
  box-shadow: var(--box-shadow);

  @media (max-width: 768px) {
    .hamburger-menu-container {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .hamburger-menu-container {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 0.625rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
