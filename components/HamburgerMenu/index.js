import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/StyledLinks";

export default function HamburgerMenu({
  menuOpen,
  setMenuOpen,
  getRandomActivity,
}) {
  const router = useRouter();

  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  return (
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
      <StyledLink href="/">
        <StyledNavIcon active={router.pathname === "/"}>
          <Icon name="home" />
          <span className="bm-item" onClick={() => setMenuOpen(false)}>
            Home
          </span>
        </StyledNavIcon>
      </StyledLink>
      <StyledLink href="/createActivity">
        <StyledNavIcon active={router.pathname === "/createActivity"}>
          <Icon name="add" color="black" fillColor="transparent" />
          <span className="bm-item" onClick={() => setMenuOpen(false)}>
            Add
          </span>
        </StyledNavIcon>
      </StyledLink>
      <StyledNavButton
        type="button"
        onClick={() => {
          getRandomActivity();
          router.push("/spotlight");
        }}
      >
        <StyledNavIcon $isActive={router.pathname === "/spotlight"}>
          <Icon name="random" />
          <span className="bm-item" onClick={() => setMenuOpen(false)}>
            Random
          </span>
        </StyledNavIcon>
      </StyledNavButton>
      <StyledLink href="/favorites">
        <StyledNavIcon active={router.pathname === "/favorites"}>
          <Icon name="navHeart" />
          <span className="bm-item" onClick={() => setMenuOpen(false)}>
            Favorites
          </span>
        </StyledNavIcon>
      </StyledLink>
    </StyledMenu>
  );
}

const StyledNavIcon = styled.div`
  display: flex;
  align-items: stretch;
  color: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  stroke: ${(props) => (props.$isActive ? "var(--teal)" : "var(--icon-color)")};
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--teal);
    stroke: var(--teal);
  }
  @media (min-width: 1200px) {
    line-height: 1.6;
    padding: 0 0 0.625rem 0.625rem;
    gap: 0.5rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const StyledNavButton = styled.button`
  all: unset;
`;

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
      font-size: 2rem;
    }
  }
`;
