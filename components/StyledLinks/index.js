import Link from "next/link";
import styled from "styled-components";
import { css } from "styled-components";

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

const linkStyles = css`
  padding: 0.8rem;
  margin: 1rem 0;
  border-radius: 0.6rem;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  background: var(--button-gradient1);
  &:hover {
    background: var(--button-gradient2);
  }
  ${(props) =>
    props.$variant === "edit" &&
    css`
      display: flex;
      border-radius: 0.6rem;
      margin: 0;
      padding: 0.3rem 0.4rem;
      border: 1px solid grey;
      box-shadow: var(--box-shadow);
      background: var(--button-background);
      &:hover {
        background: var(--button-hover-background);
      }
    `}
`;
export const StyledEditLink = styled(Link)`
  ${linkStyles}
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
