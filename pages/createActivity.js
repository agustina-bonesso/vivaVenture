import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function CreateActivity({ activity }) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
  }
  async function handleAddActivity(newActivityData) {
    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivityData),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate("/api/activities");
    toast.success("Activity added successfully!");
  }
  return (
    <>
      <StyledBackLink href="/">
        <Icon name="chevronLeft" />
        Back to all Activities
      </StyledBackLink>
      {session && (
        <ActivityForm onSubmit={handleAddActivity} initialData={activity} />
      )}
    </>
  );
}
