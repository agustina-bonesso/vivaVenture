import Header from "@/components/Header";
import GlobalStyle from "@/styles";
import { dummyData } from "@/lib/dummyData";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useLocalStorageState(`activityData`, {
    defaultValue: dummyData,
  });
  const router = useRouter();

  function handleAddActivity(newActivity) {
    const newActivityWithId = { id: uuid(), ...newActivity };
    setActivityData([newActivityWithId, ...activityData]);
  }

  function handleEditActivity(updatedActivity) {
    const updatedActivities = activityData.map((activity) => {
      if (activity.id !== updatedActivity.id) {
        return activity;
      }
      return updatedActivity;
    });
    setActivityData(updatedActivities);
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

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component
          {...pageProps}
          activityData={activityData}
          onAddActivity={handleAddActivity}
          onEditActivity={handleEditActivity}
          onDeleteActivity={handleDeleteActivity}
        />
      </main>
    </>
  );
}
