import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const StyledBackLink = styled(StyledLink)`
  display: flex;
  align-items: center;
`;
