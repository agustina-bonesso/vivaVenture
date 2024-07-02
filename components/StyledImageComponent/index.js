import Image from "next/image";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function StyledImageComponent({ src, alt }) {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} fill />
    </ImageContainer>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: var(--border-radius);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;
