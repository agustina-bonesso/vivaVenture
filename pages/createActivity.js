import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function CreateActivity({ onAddActivity, activity }) {
  async function addActivity(newActivityData) {
    onAddActivity(newActivityData);
  }
  return (
    <>
      <StyledBackLink href="/">
        <Icon name="chevronLeft" />
        Back to all Activities
      </StyledBackLink>
      <ActivityForm onSubmit={addActivity} initialData={activity} />
    </>
  );
}
