import Image from "next/image";
import styled from "styled-components";
import StyledImageComponent from "../StyledImage";

export default function ActivityDetails({ activity }) {
  return (
    <article>
      <StyledImageComponent src={activity.image} alt={activity.title} />
      <h2>{activity.title}</h2>
      <span>
        {activity.area}, {activity.country}
      </span>
      <br />
      <span>{activity.category.join(", ")}</span>
      <p>{activity.description}</p>
    </article>
  );
}
