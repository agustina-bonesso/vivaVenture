import Image from "next/image";
import styled from "styled-components";

export default function ActivityCard({ activity }) {
  return (
    <article>
      <StyledImage
        src={activity.image}
        alt={activity.title}
        width={200}
        height={200}
      />
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
  width: 100%;
`;
