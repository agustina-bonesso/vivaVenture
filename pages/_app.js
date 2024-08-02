import GlobalStyle from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";
import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/Layout";
import Fuse from "fuse.js";
import useSWR from "swr";

const URL = "api/activities";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: activityData, error, isLoading } = useSWR(URL, fetcher);
  const [favoriteActivitiesList, setFavoriteActivitiesList] =
    useLocalStorageState("favorites", {
      defaultValue: [],
    });
  const [randomActivity, setRandomActivity] = useLocalStorageState(
    "randomActivity",
    { defaultValue: null }
  );
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggleFavorite(id) {
    const isFavorite = favoriteActivitiesList.some(
      (activity) => activity._id === id
    );
    if (isFavorite) {
      setFavoriteActivitiesList(
        favoriteActivitiesList.filter((activity) => activity._id !== id)
      );
    } else {
      const activity = activityData.find((activity) => activity._id === id);
      setFavoriteActivitiesList([
        ...favoriteActivitiesList,
        { ...activity, isFavorite: true },
      ]);
    }
  }

  function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activityData.length);
    setRandomActivity(activityData[randomIndex]);
  }
  const filteredActivities = selectedCategory
    ? activityData.filter((activity) => activity.category.includes(selectedCategory))
    : activityData;

  const searchOptions = {
    keys: ["title", "city", "country"],
    threshold: 0.3,
  };
  const fuseActivity = new Fuse(filteredActivities, searchOptions);
  const results = searchTerm
    ? fuseActivity.search(searchTerm).map((res) => res.item)
    : filteredActivities;

  function handleCategorySelect(newCategory) {
    if (selectedCategory === newCategory) setSelectedCategory("");
    else setSelectedCategory(newCategory);
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <Layout getRandomActivity={getRandomActivity} onChange={handleSearch}>
        <Component
          {...pageProps}
          randomActivity={randomActivity}
          getRandomActivity={getRandomActivity}
          activityData={activityData}
          favoriteActivitiesList={favoriteActivitiesList}
          onToggleFavorite={handleToggleFavorite}
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          results={results}
        />
      </Layout>
    </>
  );
}
