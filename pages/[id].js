import { useRouter } from "next/router";
import ActivityDetails from "@/components/ActivityDetails";
import { dummyData } from "@/lib/dummyData";
import Link from "next/link";

export default function Activity() {
  const router = useRouter();
  const { id } = router.query;

  const activity = dummyData.find((activity) => activity.id === id);

  return (
    <>
      {activity ? (
        <ActivityDetails activity={activity} />
      ) : (
        <p>Activity not found</p>
      )}
      <Link href={"/"}>Back to all Activities</Link>
    </>
  );
}
