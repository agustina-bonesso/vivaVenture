import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";
import ImageUploading from "react-images-uploading";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import Select from "react-select";
import { fetchCitiesData, fetchCoordinatesData } from "@/lib/utils/geoData";
import dynamic from "next/dynamic";
import { countriesData } from "@/lib/countriesData";

const MapComponent = dynamic(() => import("@/components/Map"), { ssr: false });

export default function ActivityForm({ onSubmit, initialData, isEditMode }) {
  const router = useRouter();
  const defaultImages = initialData ? initialData.images : [];
  const [images, setImages] = useState(defaultImages);
  const maxNumberOfImages = 20;
  const countries = countriesData.map((country) => {
    return { value: country.countryCode, label: country.countryName };
  });
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (!initialData) return null;

    const country = countriesData.find(
      (country) => country.countryName === initialData?.country
    );

    return country
      ? { value: country.countryCode, label: country.countryName }
      : null;
  });
  const [selectedCity, setSelectedCity] = useState(
    initialData ? { value: initialData?.city, label: initialData?.city } : null
  );
  const [coordinates, setCoordinates] = useState(
    initialData
      ? { lat: initialData.lat, lng: initialData.lng }
      : { lat: 0, lng: 0 }
  );

  useEffect(() => {
    const fetchCities = async () => {
      if (initialData && selectedCountry) {
        const citiesNames = await fetchCitiesData(selectedCountry.value);
        setCities(citiesNames);
      } else {
        setCities([]);
      }
    };
    fetchCities();
  }, [initialData, selectedCountry]);

  const handleCountryChange = async (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null);
    setCoordinates({ lat: 0, lng: 0 });
    const citiesNames = await fetchCitiesData(selectedOption.value);
    setCities(citiesNames);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setCoordinates({ lat: selectedOption.lat, lng: selectedOption.lng });
  };
  const handleMarkerDragEnd = async (newLat, newLong) => {
    setCoordinates({ lat: newLat, lng: newLong });
    const placeData = await fetchCoordinatesData(newLat, newLong);
    setSelectedCountry({
      value: placeData.countryCode,
      label: placeData.countryName,
    });
    const citiesNames = await fetchCitiesData(selectedCountry.value);
    setCities(citiesNames);
    setSelectedCity({ value: placeData.cityName, label: placeData.cityName });
  };

  const onChangeImage = (imageList) => {
    setImages(imageList);
  };

  const uploadImages = async (images) => {
    const formData = new FormData();
    const imageUrls = [];
    images.forEach((image) => {
      if (!image.file) {
        imageUrls.push({ data_url: image.data_url });
      }
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

      const uploadedImageUrls = await response.json();
      imageUrls.push(...uploadedImageUrls);
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
    newActivity.country = selectedCountry.label;
    newActivity.category = formData.getAll("category");
    newActivity.images = await uploadImages(images);
    newActivity.lat = coordinates.lat;
    newActivity.lng = coordinates.lng;
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
        <StyledLabel htmlFor="country">Country</StyledLabel>
        <StyledSelect
          id="country"
          name="country"
          placeholder="select Country"
          options={countries}
          onChange={handleCountryChange}
          value={selectedCountry}
          defaultValue={initialData?.country}
          classNamePrefix="react-select"
          required
        />
        <StyledLabel htmlFor="city">City</StyledLabel>
        <StyledSelect
          id="city"
          name="city"
          placeholder="select City"
          options={cities}
          onChange={handleCityChange}
          value={selectedCity}
          defaultValue={initialData?.selectedOption}
          classNamePrefix="react-select"
          required
        />
        <StyledFieldset>
          <StyledLegend>Please select your Categories</StyledLegend>
          <StyledCheckboxContainer>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="ballSports"
                name="category"
                value="Ball Sports"
                defaultChecked={initialData?.category.includes("Ball Sports")}
              />{" "}
              Ball Sports{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="cycling"
                name="category"
                value="Cycling"
                defaultChecked={initialData?.category.includes("Cycling")}
              />{" "}
              Cycling{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="gymnastics"
                name="category"
                value="Gymnastics"
                defaultChecked={initialData?.category.includes("Gymnastics")}
              />{" "}
              Gymnastics{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="hiking"
                name="category"
                value="Hiking"
                defaultChecked={initialData?.category.includes("Hiking")}
              />{" "}
              Hiking{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="kayaking"
                name="category"
                value="Kayaking"
                defaultChecked={initialData?.category.includes("Kayaking")}
              />{" "}
              Kayaking{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="running"
                name="category"
                value="Running"
                defaultChecked={initialData?.category.includes("Running")}
              />{" "}
              Running{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="sailing"
                name="category"
                value="Sailing"
                defaultChecked={initialData?.category.includes("Sailing")}
              />{" "}
              Sailing{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="snowSports"
                name="category"
                value="Snow Sports"
                defaultChecked={initialData?.category.includes("Snow Sports")}
              />{" "}
              Snow Sports{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="surfing"
                name="category"
                value="Surfing"
                defaultChecked={initialData?.category.includes("Surfing")}
              />{" "}
              Surfing{" "}
            </label>
            <label>
              <StyledCheckbox
                type="checkbox"
                id="swimming"
                name="category"
                value="Swimming"
                defaultChecked={initialData?.category.includes("Swimming")}
              />{" "}
              Swimming{" "}
            </label>
          </StyledCheckboxContainer>
        </StyledFieldset>
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
          onChange={onChangeImage}
          maxNumber={maxNumberOfImages}
          dataURLKey="data_url"
          acceptType={["jpg", "png", "jpeg"]}
          maxFileSize={5242880}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <>
              <StyledImageUploadButtonContainer>
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
                  Remove all Images
                </StyledButton>
              </StyledImageUploadButtonContainer>
              <StyledImageListContainer>
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
                      <Icon name="delete" color="black" />
                    </TransparentDeleteButton>
                  </ImageContainer>
                ))}
              </StyledImageListContainer>
            </>
          )}
        </ImageUploading>
        {selectedCity && (
          <MapComponent
            lat={coordinates.lat}
            lng={coordinates.lng}
            onMarkerDragEnd={handleMarkerDragEnd}
            draggable
          />
        )}
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
  border: 1px solid var(--form-border);
  border-radius: var(--border-radius);
  font-family: var(--font-p);
  height: 3.3rem;
  font-size: 1rem;
  color: var(--text-color);
  background: var(--background-color);
  &:hover {
    border-color: var(--light-orange);
  }
  &:focus-within {
    border-color: var(--light-orange);
    outline: none;
  }
`;
const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--form-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--background-color);
  resize: vertical;
  &:hover {
    border-color: var(--light-orange);
  }
  &:focus-within {
    border-color: var(--light-orange);
    outline: none;
  }
`;
const StyledLabel = styled.label`
  font-weight: bold;
  margin-top: 0.8rem;
  font-family: var(--font-h1);
  font-size: 1.125rem;
`;
const StyledCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
  label {
    display: flex;
    align-items: flex-start;
    font-family: var(--font-p);
    font-size: 15px;
  }
  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
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
  &:hover {
    border-color: var(--light-orange);
  }
  &:focus-within {
    border-color: var(--light-orange);
    outline: none;
  }
`;
const StyledFieldset = styled.fieldset`
  font-size: 1.125rem;
  font-family: var(--font-h1);
  border-radius: var(--border-radius);
  border: 1px solid var(--form-border);
  margin-top: 0.9375rem;
  background: var(--background-color);
  &:hover {
    border-color: var(--light-orange);
  }
`;
const StyledLegend = styled.legend`
  text-align: center;
`;
const StyledImageUploadButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

const StyledImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid var(--form-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
`;
const TransparentDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(255 255 255 / 80%);
  padding: 0.3125rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
  cursor: pointer;
`;
const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid var(--form-border);
    border-radius: var(--border-radius);
    font-family: var(--font-p);
    font-size: 1rem;
    color: var(--text-color);
    background: var(--background-color);
    height: 50px;
    box-shadow: none;
    line-height: 2.6;

    cursor: pointer;
    &:hover {
      border-color: var(--light-orange);
    }
    &:focus-within {
      border-color: var(--light-orange);
    }
  }
  .react-select__menu {
    background-color: var(--form-background);
  }
  .react-select__option {
    background-color: var(--form-background);
    color: var(--text-color);
    &:hover {
      background-color: var(--light-orange);
    }
  }
  .react-select__input-container {
    color: var(--text-color);
  }
  .react-select__single-value {
    color: var(--text-color);
  }
`;
