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
        onToggleFavorite={() => onToggleFavorite(randomActivity._id, session)}
        isFavorite={
          session
            ? userData[0].favorites?.find(
                (favActivity) => favActivity === randomActivity._id
              )
            : false
        }
      />
    </>
  );
}
