import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/favorites">Favorites</Link>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={120}
          height={90}
          priority
        />
      </Link>
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
  padding-top: 0.7rem;
`;
