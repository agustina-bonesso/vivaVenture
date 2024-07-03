import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--styled-link);
`;

export const StyledBackLink = styled(StyledLink)`
  display: flex;
  width: 12.5rem;
  margin-top: 0.75rem;
  position: relative;
`;

export const StyledSmallLink = styled(Link)`
  padding: 0.1rem 0.3rem;
  margin: ${(props) =>
    props.$variant === "delete" || props.$variant === "edit" ? "0" : "1rem 0"};
  border-radius: 0.6rem;
  font-weight: bold;
  color: white;
  border: ${(props) =>
    props.$variant === "delete" || props.$variant === "edit" ? " " : "none"};
  cursor: pointer;
  background: ${(props) =>
    props.$variant === "delete" || props.$variant === "edit"
      ? "var(--button-background)"
      : "var(--button-gradient1)"};

  &:hover {
    background: ${(props) =>
      props.$variant === "delete" || props.$variant === "edit"
        ? "var(--button-hover-background)"
        : "var(--button-gradient2)"};
  }
`;

export const TransparentBackLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgb(255 255 255 / 80%);
  color: black;
  padding: 0.3125rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
`;
