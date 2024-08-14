import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Favorites({
  onToggleFavorite,
  activityData,
  userData,
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/login");
    return;
  }
  const favoriteActivities = session
    ? activityData.filter((activity) =>
        userData[0]?.favorites.includes(activity._id)
      )
    : [];

  return favoriteActivities.length === 0 ? (
    <p>You have no favorites yet.</p>
  ) : (
    <StyledList>
      {favoriteActivities.map((activity) => {
        return (
          <li key={activity._id}>
            <ActivityCard
              activity={activity}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favoriteActivities}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
