import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function CreateActivity({ onAddActivity, activity }) {
  return (
    <>
      <StyledBackLink href="/">
        <Icon name="chevronLeft" />
        Back to all Activities
      </StyledBackLink>
      <ActivityForm onSubmit={onAddActivity} initialData={activity} />
    </>
  );
}
