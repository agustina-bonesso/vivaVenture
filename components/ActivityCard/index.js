import Image from "next/image";

export default function ActivityCard({ activity }) {
  return (
    <article>
      <Image src={activity.image} alt={activity.title} width={200} height={200} />
      <h2>{activity.title}</h2>
      <span>
        {activity.country},{activity.area}
      </span>
      <div>{activity.category}</div>
      <p>{activity.description}</p>
    </article>
  );
}
