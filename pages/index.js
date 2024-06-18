import ActivityCard from "@/components/ActivityCard";
import Header from "@/components/Header";
import { dummyData } from "@/lib/dummyData";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <ul>
        {dummyData.map((activity) => {
          return (
            <li key={activity.id}>
              <ActivityCard activity={activity}></ActivityCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}
