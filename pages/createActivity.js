import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";
import useSWR from "swr";
import { toast } from "react-toastify";


export default function CreateActivity({ activity }) {
  const { mutate } = useSWR("/api/activities");

  async function handleAddActivity(newActivityData) {
    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivityData),
    });

    if (response.ok) {
      mutate();
    }
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
