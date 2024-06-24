import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icons";

export default function Activity({ activityData }) {
  const router = useRouter();
  const { id } = router.query;

  const activity = activityData.find((activity) => activity.id === id);

  return (
    <>
      <StyledBackLink href={"/"}>
        <Icon name="chevronLeft" />
        Back to all Activities
      </StyledBackLink>
      {activity ? (
        <ActivityDetails activity={activity} />
      ) : (
        <p>Activity not found</p>
      )}
    </>
  );
}
