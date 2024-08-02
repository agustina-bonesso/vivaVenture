import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import useSWR from "swr";

const URL = "api/activities";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage({
  onToggleFavorite,
  favoriteActivitiesList,
  onSelect,
  selectedCategory,
  onFilterActivities,
  onSearchActivities,
}) {
  const { data: activityData, error, isLoading } = useSWR(URL, fetcher);
  const results = onSearchActivities(onFilterActivities(activityData));

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <CategoryIcons onSelect={onSelect} selectedCategory={selectedCategory} />
      <StyledList>
        { onSearchActivities(onFilterActivities(activityData)).map((activity) => {
          return (
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
          );
        })}
      </StyledList>
    </>
  );
}
