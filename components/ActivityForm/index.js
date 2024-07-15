import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";
import ImageUploading from "react-images-uploading";
import { useState } from "react";

export default function ActivityForm({ onSubmit, initialData, isEditMode }) {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const maxNumber = 20;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const uploadImages = async (images) => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image.file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading images");
      }

      const imageUrls = await response.json();
      return imageUrls;
    } catch (error) {
      console.error("Error uploading images:", error);
      return [];
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newActivity = Object.fromEntries(formData);
    newActivity.title = newActivity.title
      .trim()
      .replace(/\b\s+\b/g, " ")
      .replace(/(\.)\s+/g, "$1 ");
    newActivity.category = formData.getAll("category");
    newActivity.images = await uploadImages(images);
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
            <StyledCheckbox
              type="checkbox"
              id="outdoor"
              name="category"
              value="Outdoor"
              defaultChecked={initialData?.category.includes("Outdoor")}
            />
            Outdoor
          </label>

          <label>
            <StyledCheckbox
              type="checkbox"
              id="water"
              name="category"
              value="Water"
              defaultChecked={initialData?.category.includes("Water")}
            />
            Water
          </label>

          <label>
            <StyledCheckbox
              type="checkbox"
              id="sport"
              name="category"
              value="Sport"
              defaultChecked={initialData?.category.includes("Sport")}
            />
            Sport
          </label>

          <label>
            <StyledCheckbox
              type="checkbox"
              id="running"
              name="category"
              value="Running"
              defaultChecked={initialData?.category.includes("Running")}
            />
            Running
          </label>

          <label>
            <StyledCheckbox
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
        {/* <StyledLabel htmlFor="image">Image</StyledLabel>
        <StyledInput
          id="image"
          name="image"
          type="text"
          placeholder="https://example.com/image.jpg"
          defaultValue={
            isEditMode ? initialData?.image : "/images/default-image.jpg"
          }
        /> */}
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "jpeg"]}
          maxFileSize={5242880} // 5MB
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // Schreiben Sie hier Ihren eigenen Layout und verwenden Sie die zugehörigen Methoden in den gewünschten Bereichen
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Bilder hochladen oder hierher ziehen
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Alle Bilder entfernen</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="200" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>
                      Aktualisieren
                    </button>
                    <button onClick={() => onImageRemove(index)}>
                      Entfernen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
         <StyledButton>{isEditMode ? "Save" : "Add"}</StyledButton>
      </StyledForm>
    </>
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

const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--dark-gray);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--background-color);
`;

const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--dark-gray);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--background-color);
  resize: vertical;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  margin-top: 0.8rem;
  font-family: var(--font-h1);
  font-size: 1.125rem;
`;

const StyledCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  label {
    display: flex;
    align-items: flex-start;
    font-family: var(--font-p);
    font-size: 15px;
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--text-color);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: green;
    border-color: green;
  }

  &:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
  }
`;
const StyledFileInput = styled(StyledInput).attrs({
  type: "file",
})``;
