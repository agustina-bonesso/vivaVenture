import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Image from "next/image";

const defaultImage = {
  data_url:
    "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function StyledImageComponent({ images, alt }) {
  if (!images || images.length === 0) {
    return (
      <ImageWrapper>
        <StyledImage src={defaultImage.data_url} alt={alt} fill />
      </ImageWrapper>
    );
  }

  if (images.length > 1) {
    return (
      <CarouselContainer>
        <Carousel showStatus={false} showThumbs={false}>
          {images.map((image, index) => (
            <ImageWrapper key={index}>
              <StyledImage src={image.data_url} alt={alt} fill />
            </ImageWrapper>
          ))}
        </Carousel>
      </CarouselContainer>
    );
  } else {
    return (
      <ImageWrapper>
        <StyledImage src={images[0].data_url} alt={alt} fill />
      </ImageWrapper>
    );
  }
}

const CarouselContainer = styled.div`
  position: relative;
  height: 200px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 12.5rem;
  max-height: 25rem;

  @media (min-width: 1600px) {
    height: 18rem;
  }
`;
