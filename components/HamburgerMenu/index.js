import React from "react";
import { stack as Menu } from "react-burger-menu";
import styled from "styled-components";
import Link from "next/link";

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  return (
    <StyledMenu right isOpen={menuOpen} onStateChange={handleStateChange}>
      <Link href="/" passHref>
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Home
        </span>
      </Link>
      <Link href="/createActivity" passHref>
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Add
        </span>
      </Link>
      <Link href="/spotlight" passHref>
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Spotlight
        </span>
      </Link>
      <Link href="/favorites" passHref>
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Favorites
        </span>
      </Link>
    </StyledMenu>
  );
}

const StyledMenu = styled(Menu)`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-menu {
    background: #ffffff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    max-height: 100%;
  }
  .bm-item-list {
    color: #373a47;
    padding: 0.8em;
  }
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #373a47;
    transition: color 0.2s;
    &:hover {
      color: #d35400;
    }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    top: 0;
    left: 0;
  }
`;
