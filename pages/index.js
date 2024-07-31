import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import useSWR from 'swr'


const URL = "api/activities";
const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function HomePage({
  onToggleFavorite,
  favoriteActivitiesList,
  results,
  onSelect,
  selectedCategory,
}) {

  const { data, error, isLoading } = useSWR( URL, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data);
 

  return (
    <>
      <CategoryIcons onSelect={onSelect} selectedCategory={selectedCategory} />
      <StyledList>
        {results.map((activity) => {
          return (
            <li key={activity.id}>
              <ActivityCard
                activity={activity}
                onToggleFavorite={onToggleFavorite}
                isFavorite={
                  favoriteActivitiesList.find(
                    (favActivity) => favActivity.id === activity.id
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
