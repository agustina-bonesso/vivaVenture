import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { dummyData } from "@/lib/dummyData";
import { StyledBackLink } from "@/components/StyledLink";

export default function Activity() {
  const router = useRouter();
  const { id } = router.query;

  const activity = dummyData.find((activity) => activity.id === id);

  return (
    <main>
      <StyledBackLink href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back to all Activities
      </StyledBackLink>
      {activity ? (
        <ActivityDetails activity={activity} />
      ) : (
        <p>Activity not found</p>
      )}
    </main>
  );
}
