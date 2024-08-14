import ActivityCard from "@/components/ActivityCard";
import { useSession } from "next-auth/react";

export default function Spotlight({
  randomActivity,
  onToggleFavorite,
  userData,
}) {
  const { data: session } = useSession();
  if (!randomActivity) return <p>No activity data available.</p>;

  return (
    <>
      <h1>Spotlight</h1>
      <ActivityCard
        activity={randomActivity}
        onToggleFavorite={() => onToggleFavorite(randomActivity._id)}
        isFavorite={
          session ? userData?.favorites.includes(randomActivity._id) : false
        }
      />
    </>
  );
}
