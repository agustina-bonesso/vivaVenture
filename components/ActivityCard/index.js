import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import StyledImageComponent from "../StyledImageComponent";

export default function ActivityCard({ activity }) {
  return (
    <article>
      <Link href={`/${activity.id}`}>
        <StyledImageComponent src={activity.image} alt={activity.title} />
        <h2>{activity.title}</h2>
      </Link>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        <p>{activity.category.join(", ")}</p>
      </div>
    </article>
  );
}
