import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: var(--styled-link);
`;

export const StyledBackLink = styled(StyledLink)`
  display: flex;
  width: 12.5rem;
  margin: 0.75rem 0 0.75rem -0.3125rem;
`;
