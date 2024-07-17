import ActivityCard from "@/components/ActivityCard";
import SearchBar from "@/components/SearchBar";
import { StyledList } from "@/styles";
import { useState } from "react";

export default function HomePage({
  activityData,
  onToggleFavorite,
  favoriteActivitiesList,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(activityData);

  function handleSearchBar(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredData = activityData.filter((activity) => {
      return activity.title.toLowerCase().includes(searchTerm);
    });

    setResults(filteredData);
    if (results === "") {
      setResults(activityData);
    }
    console.log("searchTerm:", searchTerm);
    console.log("results: ", results);
  }

  return (
    <>
      <SearchBar onChange={handleSearchBar} />
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
