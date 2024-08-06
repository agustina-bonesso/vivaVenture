import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { mutate } from "swr";

export default function CreateActivity({ activity }) {
  const router = useRouter();
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
    router.push("/");
    toast.success("Activity added successfully!");
  }
  return (
    <>
      <StyledBackLink href="/">
        <Icon name="chevronLeft" />
        Back to all Activities
      </StyledBackLink>
      <ActivityForm onSubmit={handleAddActivity} initialData={activity} />
    </>
  );
}
