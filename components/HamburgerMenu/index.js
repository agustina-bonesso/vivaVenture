import Link from "next/link";
import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  return (
    <StyledMenu
      width={"20%"}
      right
      isOpen={menuOpen}
      onStateChange={handleStateChange}
      disableOverlayClick={true}
      customBurgerIcon={false}
      customCrossIcon={false}
    >
      <Link href="/">
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Home
        </span>
      </Link>
      <Link href="/createActivity">
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Add
        </span>
      </Link>
      <Link href="/spotlight">
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Spotlight
        </span>
      </Link>
      <Link href="/favorites">
        <span className="bm-item" onClick={() => setMenuOpen(false)}>
          Favorites
        </span>
      </Link>
    </StyledMenu>
  );
}

const StyledMenu = styled(Menu)`
  .bm-menu {
    background: var(--header-footer-bg);
    padding: 1rem 0.5rem;
  }

  .bm-item-list {
    color: var(--text-color);
    padding: 0.8rem;
  }

  .bm-item {
    display: block;
    text-decoration: none;
    margin: 0 0 10px 10px;
    font-size: 1.2rem;
    transition: color 0.2s;
    color: var(--text-color);
    &:hover {
      color: var(--teal);
    }
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;
