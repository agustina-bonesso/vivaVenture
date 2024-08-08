import GlobalStyle from "@/styles";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Fuse from "fuse.js";
import useSWR, { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const {
    data: activityData,
    error,
    isLoading,
  } = useSWR("/api/activities", fetcher);

  const [favoriteActivitiesList, setFavoriteActivitiesList] = useState([]);
  const [randomActivity, setRandomActivity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  async function handleToggleFavorite(id) {
    const response = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favoriteId: id }),
    });
    if (response.ok) {
      const updatedFavorites = await response.json();
      setFavoriteActivitiesList(updatedFavorites);
    } else {
      console.error("Failed to update favorites");
    }
  }

  function getRandomActivity() {
    if (activityData && activityData.length > 0) {
      const randomIndex = Math.floor(Math.random() * activityData.length);
      setRandomActivity(activityData[randomIndex]);
    }
  }

  const filteredActivities = selectedCategory
    ? activityData.filter((activity) =>
        activity.category.includes(selectedCategory)
      )
    : activityData;

  const searchOptions = {
    keys: ["title", "city", "country"],
    threshold: 0.3,
  };

  const fuseActivity = new Fuse(filteredActivities, searchOptions);

  function handleCategorySelect(newCategory) {
    setSelectedCategory((prevCategory) =>
      prevCategory === newCategory ? "" : newCategory
    );
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  const results = searchTerm
    ? fuseActivity.search(searchTerm).map((res) => res.item)
    : filteredActivities;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading activities: {error.message}</div>;

  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <StyledToastContainer />
        <Layout getRandomActivity={getRandomActivity} onChange={handleSearch}>
          <Component
            {...pageProps}
            activityData={results}
            randomActivity={randomActivity}
            getRandomActivity={getRandomActivity}
            favoriteActivitiesList={favoriteActivitiesList}
            onToggleFavorite={handleToggleFavorite}
            onSelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}
