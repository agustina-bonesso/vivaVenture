import styled from "styled-components";
import { StyledButton } from "../StyledButton";
import { useRouter } from "next/router";
import { StyledBackLink } from "../StyledLink";

export default function ActivityForm({ onAddActivity }) {
  const router = useRouter();

  function validateCheckboxes() {
    const checkboxes = document.querySelectorAll(
      'input[name="category"]:checked'
    );
    if (checkboxes.length === 0) {
      alert("Please select at least one category.");
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateCheckboxes()) return;
    const formData = new FormData(event.target);
    const newActivity = Object.fromEntries(formData);
    newActivity.category = formData.getAll("category");
    onAddActivity(newActivity);
    router.push("/");
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledBackLink href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back to all Activities
      </StyledBackLink>{" "}
      <StyledLabel htmlFor="title">Activity</StyledLabel>
      <StyledInput
        id="title"
        name="title"
        type="text"
        maxLength="150"
        placeholder="add activity-title"
        required
      />
      <StyledLabel htmlFor="area">Area</StyledLabel>
      <StyledInput
        id="area"
        name="area"
        type="text"
        placeholder="add area"
        required
      />
      <StyledLabel htmlFor="country">Country</StyledLabel>
      <StyledInput
        id="country"
        name="country"
        type="text"
        placeholder="add country"
        required
      />
      <StyledLabel htmlFor="category">Category</StyledLabel>
      <StyledCheckboxContainer>
        <StyledInput
          type="checkbox"
          id="outdoor"
          name="category"
          value="outdoor"
        />
        <label htmlFor="outdoor">Outdoor</label>

        <StyledInput type="checkbox" id="water" name="category" value="water" />
        <label htmlFor="water">Water</label>

        <StyledInput type="checkbox" id="sport" name="category" value="sport" />
        <label htmlFor="sport">Sport</label>

        <StyledInput
          type="checkbox"
          id="running"
          name="category"
          value="running"
        />
        <label htmlFor="running">Running</label>

        <StyledInput
          type="checkbox"
          id="cycling"
          name="category"
          value="cycling"
        />
        <label htmlFor="cycling">Cycling</label>
      </StyledCheckboxContainer>
      <StyledLabel htmlFor="description">Description</StyledLabel>
      <StyledTextarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="add description"
      ></StyledTextarea>
      <StyledLabel htmlFor="image">Image</StyledLabel>
      <StyledInput
        id="image"
        name="image"
        type="text"
        placeholder="https://example.com/image.jpg"
        defaultValue={"/images/default-image.jpg"}
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 0.5rem;
  justify-content: center;
`;
const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;
const StyledTextarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin: 0 10px;
  }
`;
