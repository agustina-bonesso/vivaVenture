import Header from "@/components/Header";
import GlobalStyle from "@/styles";
import { dummyData } from "@/lib/dummyData";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useState(dummyData);

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
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component
          {...pageProps}
          onAddActivity={handleAddActivity}
          activityData={activityData}
          onEditActivity={handleEditActivity}
        />
      </main>
    </>
  );
}
