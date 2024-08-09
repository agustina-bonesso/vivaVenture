import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import { useSession } from "next-auth/react";

export default function HomePage({
  onToggleFavorite,
  onSelect,
  selectedCategory,
  activityData,
  userData,
}) {
  const { data: session } = useSession();

  return (
    <>
      <CategoryIcons onSelect={onSelect} selectedCategory={selectedCategory} />
      <StyledList>
        {activityData.map((activity) => (
          <li key={activity._id}>
            <ActivityCard
              activity={activity}
              onToggleFavorite={onToggleFavorite}
              isFavorite={
                session
                  ? userData[0].favorites.some(
                      (favActivity) => favActivity === activity._id
                    )
                  : false
              }
            />
          </li>
        ))}
      </StyledList>
    </>
  );
}
