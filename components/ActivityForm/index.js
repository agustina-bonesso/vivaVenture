import styled from "styled-components";
import { StyledButton } from "../StyledButton";

export default function ActivityForm({onAddActivity}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newActivity = data;
    onAddActivity(newActivity);
    
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="title">Activity</StyledLabel>
      <StyledInput
        id="title"
        title="title"
        type="text"
        maxLength="150"
        defaultValue="add activity-title"
        required
      />

      <StyledLabel htmlFor="area">Area</StyledLabel>
      <StyledInput id="area" name="area" type="text" defaultValue="add area" />
      <StyledLabel htmlFor="country">Country</StyledLabel>
      <StyledInput
        id="country"
        name="country"
        type="text"
        defaultValue="add country"
      />

      <StyledLabel htmlFor="category">Category</StyledLabel>
      <select name="category" id="category">
        <option value="">--Please choose an option--</option>
        <option value="outdoor">Outdoor</option>
        <option value="water">Water</option>
        <option value="sport">Sport</option>
      </select>

      <StyledLabel htmlFor="description">Description</StyledLabel>
      <StyledTextarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue="add description"
      ></StyledTextarea>
      <StyledLabel htmlFor="image">Image</StyledLabel>
      <StyledInput
        id="image"
        name="image"
        type="text"
        defaultValue="paste your image-url here"
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 0.5rem;
  padding-top: 4rem;
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
