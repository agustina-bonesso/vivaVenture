import ActivityCard from "@/components/ActivityCard";
import Login from "@/components/Login";
import { StyledList } from "@/styles";
import { useSession } from "next-auth/react";

export default function Favorites({
  onToggleFavorite,
  activityData,
  userData,
}) {
  const { data: session } = useSession();

  const favoriteActivities = session
    ? activityData.filter((activity) =>
        userData[0]?.favorites.find(
          (favorivedActivity) => favorivedActivity === activity._id
        )
      )
    : [];

  return (
    <>
      {!session ? (
        <Login />
      ) : favoriteActivities.length === 0 ? (
        <p>No favorite activities found.</p>
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
      )}
    </>
  );
}
