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

export const TransparentBackLink = styled.a`
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
