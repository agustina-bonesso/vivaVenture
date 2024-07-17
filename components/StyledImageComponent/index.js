import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Image from "next/image";

export default function StyledImageComponent({ images, alt }) {
  if (!images || images.length === 0) {
    return <p>No Picture available</p>;
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
        <StyledImage src={images[0].data_url} alt={alt} layout="fill" />
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
