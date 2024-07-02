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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isFavorite ? "red" : "black"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
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
