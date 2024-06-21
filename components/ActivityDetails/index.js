import StyledImageComponent from "../StyledImageComponent";

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
    </article>
  );
}
