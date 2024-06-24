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

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component
          {...pageProps}
          onAddActivity={handleAddActivity}
          activityData={activityData}
        />
      </main>
    </>
  );
}
