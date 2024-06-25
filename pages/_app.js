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
  function handleEditActivity(newActivity) {
    const setUpActivity = activityData.map((activity) => {
      if (activity.id !== newActivity.id) {
        return activity;
      }
      return newActivity;
    });
    setActivityData(setUpActivity);
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
