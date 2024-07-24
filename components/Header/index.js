import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/router";

export default function Header({ getRandomActivity, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const showSearchBar =
    router.pathname === "/" || router.pathname === "/favorites";

  return (
    <StyledHeader>
      <StyledLink href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={90}
          height={60}
          priority
        />
      </StyledLink>
      {showSearchBar && (
        <SearchBarContainer>
          <SearchBar
            onChange={onChange}
            placeholder={
              router.pathname === "/favorites"
                ? "Search within favorites"
                : "Search for activites, locations"
            }
          />
        </SearchBarContainer>
      )}

      <StyledDiv>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={30} />
        {menuOpen && (
          <HamburgerMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            getRandomActivity={getRandomActivity}
          />
        )}
      </StyledDiv>
      <Overlay $isActive={menuOpen} onClick={() => setMenuOpen(false)} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: var(--header-footer-bg);
  top: 0;
  z-index: 20;
  box-shadow: var(--box-shadow);
`;

const StyledLink = styled(Link)`
  padding: 0.2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
`;

const StyledDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchBarContainer = styled.div`
  margin: 0.6rem;
  width: 60%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
