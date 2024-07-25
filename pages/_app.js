import GlobalStyle from "@/styles";
import { dummyData } from "@/lib/dummyData";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";
import { useEffect, useState } from "react";
import { ConfirmModal } from "@/components/ConfirmModal";
import Layout from "@/components/Layout";
import Fuse from "fuse.js";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useLocalStorageState(`activityData`, {
    defaultValue: dummyData,
  });
  const router = useRouter();
  const [favoriteActivitiesList, setFavoriteActivitiesList] =
    useLocalStorageState("favorites", {
      defaultValue: [],
    });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const [randomActivity, setRandomActivity] = useLocalStorageState(
    "randomActivity",
    { defaultValue: null }
  );

  function handleAddActivity(newActivity) {
    const newActivityWithId = { id: uuid(), ...newActivity };
    setActivityData([newActivityWithId, ...activityData]);
    toast.success("Activity added succesfully !");
  }

  function handleEditActivity(updatedActivity) {
    const updatedActivities = activityData.map((activity) => {
      if (activity.id !== updatedActivity.id) {
        return activity;
      }
      return updatedActivity;
    });
    setActivityData(updatedActivities);
    toast.success("Activity updated succesfully !");
  }

  function handleDeleteActivity(id) {
    setIsModalOpen(true);
    setActiveId(id);
  }

  function confirmDeleteActivity() {
    const updatedActivities = activityData.filter(
      (activity) => activity.id !== activeId
    );
    setActivityData(updatedActivities);
    setIsModalOpen(false);
    setActiveId(null);
    router.push("/");
    toast.success("Activity deleted successfully !");
  }

  function handleToggleFavorite(id) {
    const isSaved = favoriteActivitiesList.find(
      (activity) => activity.id === id
    );

    if (isSaved) {
      const updatedList = favoriteActivitiesList.map((activity) => {
        if (activity.id !== id) {
          return activity;
        }
        return { ...activity, isFavorite: !activity.isFavorite };
      });
      setFavoriteActivitiesList(updatedList);
    } else {
      const newFavoriteActivity = { id: id, isFavorite: true };
      setFavoriteActivitiesList([
        newFavoriteActivity,
        ...favoriteActivitiesList,
      ]);
    }
  }

  function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activityData.length);
    setRandomActivity(activityData[randomIndex]);
  }

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(activityData);

  useEffect(() => {
    setResults(activityData);
  }, [activityData]);

  const categoryOptions = {
    keys: ["category"],
    threshold: 0.3,
  };
  const searchOptions = {
    keys: ["title", "city", "country"],
    threshold: 0.3,
  };

  const fuseCategory = new Fuse(activityData, categoryOptions);
  const fuseActivity = new Fuse(activityData, searchOptions);

  function handleCategorySelect(activity) {
    if (selectedCategory === activity) {
      setSelectedCategory("");
      updateResults("", searchTerm);
    } else {
      setSelectedCategory(activity);
      updateResults(activity, searchTerm);
    }
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    updateResults(selectedCategory, searchTerm);
  }

  function updateResults(activityCategory, searchTerm) {
    let filteredResults = activityData;

    if (activityCategory) {
      const categoryResults = fuseCategory
        .search(activityCategory)
        .map((result) => result.item);

      filteredResults = filteredResults.filter((activity) =>
        categoryResults.includes(activity)
      );
    }

    if (searchTerm) {
      const activityResults = fuseActivity
        .search(searchTerm)
        .map((result) => result.item);

      filteredResults = filteredResults.filter((activity) =>
        activityResults.includes(activity)
      );
    }

    setResults(filteredResults);
  }

  useEffect(() => {
    if (searchTerm && results.length === 0) {
      toast.info("No matching results !");
    }
  }, [searchTerm, results]);

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
          onAddActivity={handleAddActivity}
          onEditActivity={handleEditActivity}
          onDeleteActivity={handleDeleteActivity}
          onToggleFavorite={handleToggleFavorite}
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          results={results}
        />
      </Layout>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDeleteActivity}
      >
        Are you sure you want to delete this activity?
      </ConfirmModal>
    </>
  );
}
