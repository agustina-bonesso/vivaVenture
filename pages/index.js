import ActivityCard from "@/components/ActivityCard";
import Header from "@/components/Header";
import { dummyData } from "@/lib/dummyData";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <StyledList>
          {dummyData.map((activity) => {
            return (
              <li key={activity.id}>
                <ActivityCard activity={activity} />
              </li>
            );
          })}
        </StyledList>
      </main>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;
