import ActivityForm from "@/components/ActivityForm";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function CreateActivity({ onAddActivity, activity }) {
  async function addActivity(newActivityData) {
    try {
      const formData = new FormData();
      Object.keys(newActivityData).forEach((key) => {
        formData.append(key, newActivityData[key]);
      });
      console.log(newActivityData.image);
      const response = await fetch("/api/upload", {
        method: "POST",

        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { url } = await response.json();
      newActivityData.image = url;
      onAddActivity(newActivityData);
    } catch (error) {
      console.error(error);
    }
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
