import ActivityCard from "@/components/ActivityCard";
import Link from "next/link";
import { dummyData } from "@/lib/dummyData";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
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
        <StyledFixLink href="/createActivity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </StyledFixLink>
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

const StyledFixLink = styled(Link)`
  position: fixed;
  right: 1.125rem;
  bottom: 1.125rem;
`;
