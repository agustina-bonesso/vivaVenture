import styled from "styled-components";
import { css } from "styled-components";

const buttonStyles = css`
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
    props.$variant === "delete" &&
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
export const StyledButton = styled.button`
  ${buttonStyles}
`;
