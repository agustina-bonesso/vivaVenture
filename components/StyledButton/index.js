import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: lightsalmon;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === "delete" &&
    css`
      background-color: white;
    `}
`;
