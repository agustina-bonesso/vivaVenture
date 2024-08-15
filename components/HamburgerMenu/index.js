import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";
import NavLinks from "../NavLinks";

export default function HamburgerMenu({
  menuOpen,
  setMenuOpen,
  getRandomActivity,
}) {
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  return (
    <>
      <StyledMenu
        width={"25%"}
        right
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        disableOverlayClick={true}
        customBurgerIcon={false}
        customCrossIcon={false}
        noOverlay
      >
        <NavLinks
          getRandomActivity={getRandomActivity}
          closeMenu={() => setMenuOpen(false)}
          showSubline={true}
        />
      </StyledMenu>
    </>
  );
}

const StyledMenu = styled(Menu)`
  .bm-menu {
    background: var(--header-footer-bg);
    padding: 1rem 0.5rem;
  }

  .bm-item-list {
    padding: 0.8rem;
  }

  .bm-item {
    margin: 0 0 10px 10px;
    font-size: 1.2rem;
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
