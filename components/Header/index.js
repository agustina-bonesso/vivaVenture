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
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={120}
          height={90}
          priority
        />
      </Link>
      <DistanceDiv>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} />
        {menuOpen && (
          <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </DistanceDiv>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 20;
  padding-top: 0.7rem;
  background-color: var(--header-footer-bg);
  box-shadow: var(--box-shadow);
`;

const DistanceDiv = styled.div`
  width: 100px;
  position: absolute;
  right: 0px;
`;
