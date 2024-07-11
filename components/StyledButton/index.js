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
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
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

export const ModalButton = styled.button`
  background: var(--background-color);
  color: var(--text-color);
  padding: 0.7rem 1.3rem;
  margin-left: 0.625rem;
  border: 2px solid #0d0d0d;
  border-radius: 0.6rem;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$variant === "modal-delete" ? "#c82333" : "#5a6268"};
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const TransparentFavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(255 255 255 / 50%);
  padding: 0.3125rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
  cursor: pointer;
`;

export const TransparentBackButton = styled.button`
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
  z-index: 7;
  cursor: pointer;
  border: none;
`;
