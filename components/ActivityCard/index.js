import StyledImageComponent from "@/components/StyledImageComponent";
import { StyledLink } from "@/components/StyledLinks";

export default function ActivityCard({
  activity,
  onToggleFavorite,
  isFavorite
}) {
  return (
    <article>
      <StyledLink href={`/${activity.id}`}>
        <StyledImageComponent
          src={activity.image}
          alt={activity.title}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={activity.id}
        />
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
