import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledButton } from "@/components/StyledButton";
import { StyledLink } from "@/components/StyledLinks";

export default function ActivityDetails({ activity }) {
  return (
    <article>
      <StyledImageComponent src={activity.image} alt={activity.title} />
      <h2>{activity.title}</h2>
      <div>
        <p>
          {activity.area}, {activity.country}
        </p>
        <p>{activity.category.join(", ")}</p>
      </div>
      <p>{activity.description}</p>
      <StyledButton>
        <StyledLink href={`/${activity.id}/edit`}>Edit</StyledLink>
      </StyledButton>
    </article>
  );
}
