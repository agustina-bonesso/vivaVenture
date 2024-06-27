import Header from "@/components/Header";
import GlobalStyle from "@/styles";
import { dummyData } from "@/lib/dummyData";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useState(dummyData);
  const router = useRouter();

  function handleAddActivity(newActivity) {
    const newActivityWithId = { ...newActivity, id: uuid() };
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
