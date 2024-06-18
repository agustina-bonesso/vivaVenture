import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Image src="/logo.png" alt="Logo" width={150} height={125} priority />
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 9.375rem;
  width: 100%;
  position: fixed;
  background-color: white;
  top: 0;
`;
