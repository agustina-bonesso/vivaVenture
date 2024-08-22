import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "@/components/StyledButton";
import { toast } from "react-toastify";
import { mutate } from "swr";

export default function UserForm({ initialUserData, onClose }) {
  const maxChars = 250;

  const [aboutMeText, setAboutMeText] = useState(initialUserData?.aboutMe || "");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        toast.error("There was a problem updating your information");
        return;
      }
      mutate("/api/users");
      toast.success("User information updated successfully");
      onClose();
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="city">City</StyledLabel>
      <StyledInput
        id="city"
        name="city"
        type="text"
        defaultValue={initialUserData?.city}
      />
      <StyledLabel htmlFor="country">Country</StyledLabel>
      <StyledInput
        id="country"
        name="country"
        type="text"
        defaultValue={initialUserData?.country}
      />
      <StyledLabel htmlFor="aboutMe">About me</StyledLabel>
      <StyledTextArea
        name="aboutMe"
        id="aboutMe"
        cols="30"
        rows="10"
        placeholder="Add a text that describes you"
        value={aboutMeText}
        onChange={(e) => setAboutMeText(e.target.value)}
      ></StyledTextArea>
      <CharCounter>
        {maxChars - aboutMeText.length} characters remaining
      </CharCounter>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  background: var(--form-background);
  color: var(--text-color);
`;

const StyledLabel = styled.label`
  font-weight: bold;
  margin-top: 0.8rem;
  font-family: var(--font-h1);
  font-size: 1.125rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
`;

const StyledTextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  resize: vertical;
  min-height: 100px;
`;

const CharCounter = styled.div`
  font-size: 0.875rem;
  color: grey;
  text-align: right;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;
