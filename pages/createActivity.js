import ActivityForm from "@/components/ActivityForm";

export default function CreateActivity({ onAddActivity, activity }) {
  return <ActivityForm onSubmit={onAddActivity} initialData={activity}/>;
}
