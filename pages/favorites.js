import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Favorites({
  onToggleFavorite,
  activityData,
  userData,
}) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
  }
  const favoriteActivities = session
    ? activityData.filter((activity) =>
        userData[0]?.favorites.find(
          (favoriteActivity) => favoriteActivity === activity._id
        )
      )
    : [];

  return (
    session &&
    (favoriteActivities.length === 0 ? (
      <p> </p>
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
    ))
  );
}
