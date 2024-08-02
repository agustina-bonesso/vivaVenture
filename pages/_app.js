import GlobalStyle from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";
import { useState } from "react";
import Layout from "@/components/Layout";
import Fuse from "fuse.js";


export default function App({ Component, pageProps }) {
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

  const onFilterActivities = (data) => {
    if (selectedCategory) {
      return data.filter((activity) =>
        activity.category.includes(selectedCategory)
      );
    } else {
      return data;
    }
  };

  const onSearchActivities = (data) => {
    const fuseActivity = new Fuse(data, searchOptions);
    if (searchTerm) {
      return fuseActivity.search(searchTerm).map((res) => res.item);
    } else {
      return data;
    }
  };

  const searchOptions = {
    keys: ["title", "city", "country"],
    threshold: 0.3,
  };

  function handleCategorySelect(newCategory) {
    if (selectedCategory === newCategory) setSelectedCategory("");
    else setSelectedCategory(newCategory);
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <Layout getRandomActivity={getRandomActivity} onChange={handleSearch}>
        <Component
          {...pageProps}
          randomActivity={randomActivity}
          getRandomActivity={getRandomActivity}
          favoriteActivitiesList={favoriteActivitiesList}
          onToggleFavorite={handleToggleFavorite}
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          onFilterActivities={onFilterActivities}
          onSearchActivities={onSearchActivities}
        />
      </Layout>
    </>
  );
}
