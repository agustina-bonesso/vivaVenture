import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8rem;
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
