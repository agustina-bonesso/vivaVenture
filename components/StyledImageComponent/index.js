import Image from "next/image";
import styled from "styled-components";
import { Icon } from "@/components/Icon";

export default function StyledImageComponent({
  src,
  alt,
  isFavorite,
  onToggleFavorite,
  id,
}) {
  return (
    <>
      <StyledFavoriteButton onClick={() => onToggleFavorite(id)}>
        <Icon fill={isFavorite ? "red" : "black"} />
      </StyledFavoriteButton>
      <ImageContainer>
        <StyledImage src={src} alt={alt} fill />
      </ImageContainer>
    </>
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
const StyledFavoriteButton = styled.button`
  width: 3.75rem;
`;
