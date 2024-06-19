import Image from "next/image";
import styled from "styled-components";

export default function ActivityCard({ activity }) {
  return (
    <article>
      <ImageContainer>
        <StyledImage src={activity.image} alt={activity.title} fill />
      </ImageContainer>

      <h2>{activity.title}</h2>
      <span>
        {activity.area}, {activity.country}
      </span>
      <div>{activity.category.join(", ")}</div>
      <p>{activity.description}</p>
    </article>
  );
}
const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;
