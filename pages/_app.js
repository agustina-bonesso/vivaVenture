import Header from "@/components/Header";
import GlobalStyle from "../styles";
import { dummyData } from "@/lib/dummyData";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [activityData, setActivityData] = useState(dummyData);

  function handleAddActivity(newActivity) {
    console.log(newActivity)
   // const newActivity = {id: uuid}
    // setActivityData();
  }


  
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} onAddActivity={handleAddActivity}  />
      </main>
    </>
  );
}
