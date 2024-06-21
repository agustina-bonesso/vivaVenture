import StyledImageComponent from "../StyledImageComponent";
import { StyledLink } from "../StyledLink";

export default function ActivityCard({ activity }) {
  return (
    <article>
      <StyledLink href={`/${activity.id}`}>
        <StyledImageComponent src={activity.image} alt={activity.title} />
        <h2>{activity.title}</h2>
      </StyledLink>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        <p>{activity.category.join(", ")}</p>
      </div>
    </article>
  );
}
