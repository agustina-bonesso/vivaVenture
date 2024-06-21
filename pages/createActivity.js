import ActivityForm from "@/components/ActivityForm";

export default function CreateActivity({ onAddActivity }) {
  return (
    <main>
      <ActivityForm onAddActivity={onAddActivity} />
    </main>
  );
}
