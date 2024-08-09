import GlobalStyle from "@/styles";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";
import { useState } from "react";
import Layout from "@/components/Layout";
import Fuse from "fuse.js";
import useSWR, { mutate, SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import useLocalStorageState from "use-local-storage-state";

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

  const { data: userData } = useSWR("/api/users", fetcher);

  const [randomActivity, setRandomActivity] = useLocalStorageState(
    "randomActivity",
    { defaultValue: null }
  );
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  async function handleToggleFavorite(id, session) {
    if (!session) {
      return;
    }
    const favorites = userData[0]?.favorites || [];
    let updatedFavorites;
    if (favorites.length === 0) {
      updatedFavorites = [id];
    } else {
      if (favorites.includes(id)) {
        updatedFavorites = favorites.filter((activity) => activity !== id);
      } else {
        updatedFavorites = [...favorites, id];
      }
    }

    const response = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorites: updatedFavorites }),
    });

    if (response.ok) {
      mutate("/api/users");
      console.log("Favorites updated successfully");
    } else {
      console.error("Failed to update favorites", await response.json());
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
            onToggleFavorite={handleToggleFavorite}
            onSelect={handleCategorySelect}
            selectedCategory={selectedCategory}
            userData={userData}
          />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}
