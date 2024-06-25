import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";
import { StyledBackLink } from "@/components/StyledLinks";
import { Icon } from "@/components/Icon";

export default function ActivityForm({
  onAddActivity,
  initialData,
  isEditMode,
  onEditActivity,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newActivity = Object.fromEntries(formData);
    newActivity.category = formData.getAll("category");
    if (newActivity.category.length === 0) {
      alert("Please select at least one category.");
      return false;
    }
    if (isEditMode) {
      const updateActivity = { id: initialData.id, ...newActivity };
      onEditActivity(updateActivity);
    } else {
      onAddActivity(newActivity);
    }
    router.push("/");
  }

  return (
    <>
      {isEditMode ? (
        <StyledBackLink href={`/${initialData.id}`}>
          <Icon name="chevronLeft" />
          Discard changes
        </StyledBackLink>
      ) : (
        <StyledBackLink href={"/"}>
          <Icon name="chevronLeft" />
          Back to all Activities
        </StyledBackLink>
      )}
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Activity</StyledLabel>
        <StyledInput
          id="title"
          name="title"
          type="text"
          maxLength="150"
          placeholder="add activity-title"
          defaultValue={initialData?.title}
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
              defaultChecked={
                isEditMode && initialData.category.includes("Outdoor")
              }
            />
            Outdoor
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="water"
              name="category"
              value="Water"
              defaultChecked={
                isEditMode && initialData.category.includes("Water")
              }
            />
            Water
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="sport"
              name="category"
              value="Sport"
              defaultChecked={
                isEditMode && initialData.category.includes("Sport")
              }
            />
            Sport
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="running"
              name="category"
              value="Running"
              defaultChecked={
                isEditMode && initialData.category.includes("Running")
              }
            />
            Running
          </label>

          <label>
            <StyledInput
              type="checkbox"
              id="cycling"
              name="category"
              value="Cycling"
              defaultChecked={
                isEditMode && initialData.category.includes("Cycling")
              }
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
            isEditMode ? initialData.image : "/images/default-image.jpg"
          }
        />
        <StyledButton type="submit">{isEditMode ? "Save" : "Add"}</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 0.5rem;
  justify-content: center;
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
