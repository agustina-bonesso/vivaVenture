import Image from "next/image";
import styled from "styled-components";

export default function StyledImageComponent({ src, alt }) {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} fill />
    </ImageContainer>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
  box-shadow: 3px 3px 5px black;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;
