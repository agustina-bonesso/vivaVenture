import Header from "@/components/Header";
import GlobalStyle from "@/styles";
import { dummyData } from "@/lib/dummyData";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@/components/Toast";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useLocalStorageState(`activityData`, {
    defaultValue: dummyData,
  });
  const router = useRouter();
  const [favoriteActivitiesList, setFavoriteActivitiesList] =
    useLocalStorageState("favorites", {
      defaultValue: [],
    });

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
    const confirmDelete = confirm(
      "Are you sure you want to delete this activity?"
    );

    if (confirmDelete) {
      const updatedActivities = activityData.filter(
        (activity) => activity.id !== id
      );
      setActivityData(updatedActivities);
      router.push("/");
    }
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

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledToastContainer />
      <main>
        <Component
          {...pageProps}
          activityData={activityData}
          favoriteActivitiesList={favoriteActivitiesList}
          onAddActivity={handleAddActivity}
          onEditActivity={handleEditActivity}
          onDeleteActivity={handleDeleteActivity}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </>
  );
}
