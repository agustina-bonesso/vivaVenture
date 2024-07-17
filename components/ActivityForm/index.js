import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";

export default function ActivityForm({ onSubmit, initialData, isEditMode }) {
  const router = useRouter();
  const defaultImages = initialData ? initialData.images : [];
  const [images, setImages] = useState(defaultImages);
  const maxNumberOfImages = 20;

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
      console.log("Uploaded image URLs:", imageUrls);
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
    console.log("New Activity:", newActivity);
    onSubmit(newActivity);
    router.push("/");
  }

  return (
<<<<<<< Updated upstream
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
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumberOfImages}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "jpeg"]}
          maxFileSize={5242880}
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
            <>
              <StyledWrapDiv>
                <StyledButton
                  type="button"
                  $variant="imageSelectOrDelete"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Choose Images
                </StyledButton>
                <StyledButton
                  type="button"
                  $variant="imageSelectOrDelete"
                  onClick={onImageRemoveAll}
                >
                  Remove all images
                </StyledButton>
              </StyledWrapDiv>
              <StyledWrapDiv>
                {imageList.map((image, index) => (
                  <ImageContainer key={index}>
                    <Image
                      src={image.data_url}
                      alt={`picture ${index}`}
                      height={200}
                      width={200}
                    />
                    <TransparentDeleteButton
                      title="Remove"
                      type="button"
                      onClick={() => onImageRemove(index)}
                    >
                      <Icon name="delete" />
                    </TransparentDeleteButton>
                  </ImageContainer>
                ))}
              </StyledWrapDiv>
            </>
          )}
        </ImageUploading>
         <StyledButton>{isEditMode ? "Save" : "Add"}</StyledButton>
      </StyledForm>
    </>
=======
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
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumberOfImages}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg"]}
        maxFileSize={5242880}
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
          <div className="upload__image-wrapper">
            <StyledButton
              type="button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Bilder hochladen oder hierher ziehen
            </StyledButton>
            &nbsp;
            <StyledButton type="button" onClick={onImageRemoveAll}>
              Alle Bilder entfernen
            </StyledButton>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image
                  src={image.data_url}
                  alt={`picture ${index}`}
                  height={200}
                  width={200}
                />
                <div className="image-item__btn-wrapper">
                  <StyledButton
                    type="button"
                    onClick={() => onImageUpdate(index)}
                  >
                    Aktualisieren
                  </StyledButton>
                  <StyledButton
                    type="button"
                    onClick={() => onImageRemove(index)}
                  >
                    Entfernen
                  </StyledButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
       <StyledButton>{isEditMode ? "Save" : "Add"}</StyledButton>
    </StyledForm>
>>>>>>> Stashed changes
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

const StyledWrapDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, auto);
  gap: 10px;
  justify-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const TransparentDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(255 255 255 / 50%);
  padding: 0.3125rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
  cursor: pointer;
`;
