import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <>
    <StyledHeader>
      <Image src="/logo.png" alt="Logo" width={150} height={125} priority />
    </StyledHeader>
    <hr></hr>

    </>
  );
}

const StyledHeader = styled.header`
display: flex;
justify-content: center;
margin-top: -10px;
`

