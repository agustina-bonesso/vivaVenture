import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";

export default function HomePage({
  onToggleFavorite,
  favoriteActivitiesList,
  onSelect,
  selectedCategory,
  activityData,
}) {
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
                favoriteActivitiesList.find(
                  (favActivity) => favActivity._id === activity._id
                )?.isFavorite
              }
            />
          </li>
        ))}
      </StyledList>
    </>
  );
}
