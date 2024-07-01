import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";

export default function ActivityForm({ onSubmit, initialData, isEditMode }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newActivity = Object.fromEntries(formData);
    newActivity.title = newActivity.title
      .trim()
      .replace(/\b\s+\b/g, " ")
      .replace(/(\.)\s+/g, "$1 ");
    console.log(newActivity.title);
    newActivity.category = formData.getAll("category");
    if (newActivity.category.length === 0) {
      alert("Please select at least one category.");
      return false;
    }

    onSubmit(newActivity);
    router.push("/");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Activity</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          type="text"
          placeholder="add activity-title"
          defaultValue={initialData?.title}
          pattern="^\s*[A-Za-z0-9*][A-Za-z0-9\.\s]{1,34}[A-Za-z0-9\.]$"
          required
        />
        <StyledLabel htmlFor="area">Area</StyledLabel>
        <StyledInput
          id="area"
          name="area"
          type="text"
          placeholder="add area"
          defaultValue={initialData?.area}
          required
        />
        <StyledLabel htmlFor="country">Country</StyledLabel>
        <StyledInput
          id="country"
          name="country"
          type="text"
          placeholder="add country"
          defaultValue={initialData?.country}
          required
        />
        <StyledLabel htmlFor="category">Category</StyledLabel>
        <StyledCheckboxContainer>
          <label>
            <StyledInput
              type="checkbox"
              id="outdoor"
              name="category"
              value="Outdoor"
              defaultChecked={initialData?.category.includes("Outdoor")}
            />
            Outdoor
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="water"
              name="category"
              value="Water"
              defaultChecked={initialData?.category.includes("Water")}
            />
            Water
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="sport"
              name="category"
              value="Sport"
              defaultChecked={initialData?.category.includes("Sport")}
            />
            Sport
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="running"
              name="category"
              value="Running"
              defaultChecked={initialData?.category.includes("Running")}
            />
            Running
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="cycling"
              name="category"
              value="Cycling"
              defaultChecked={initialData?.category.includes("Cycling")}
            />
            Cycling
          </label>
        </StyledCheckboxContainer>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <StyledTextarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="add description"
          defaultValue={initialData?.description}
        ></StyledTextarea>
        <StyledLabel htmlFor="image">Image</StyledLabel>
        <StyledInput
          id="image"
          name="image"
          type="text"
          placeholder="https://example.com/image.jpg"
          defaultValue={
            isEditMode ? initialData?.image : "/images/default-image.jpg"
          }
        />
        <StyledButton>{isEditMode ? "Save" : "Add"}</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledInput = styled.input`
  padding: 0.5rem;
  border: 3px solid black;
  border-radius: 0.5rem;
`;
const StyledTextarea = styled.textarea`
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.3125rem 0.9375rem;
  align-items: center;
  margin-bottom: 0.625rem;

  input[type="checkbox"] {
    margin: 0 10px;
  }
`;
