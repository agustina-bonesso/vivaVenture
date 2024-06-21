import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Image src="/logo.png" alt="Logo" width={120} height={90} priority />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 1;
`;
