import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const MapOverView = dynamic(() => import("@/components/MapOverView"), {
  ssr: false,
});

export default function HomePage({
  onToggleFavorite,
  onSelect,
  selectedCategory,
  activityData,
  userData,
}) {
  const { data: session } = useSession();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const markersData = activityData.map((activity) => {
    return {
      geoCode: [activity.lat, activity.lng],
      popUp: `Activity: ${activity.title}`,
    };
  });
  function handleMapView() {
    setIsMapOpen(!isMapOpen);
  }
  return (
    <>
      <CategoryIcons onSelect={onSelect} selectedCategory={selectedCategory} />
      {isMapOpen ? (
        <MapOverView isMapOverView markers={markersData} />
      ) : (
        <StyledList>
          {activityData.map((activity) => (
            <li key={activity._id}>
              <ActivityCard
                activity={activity}
                onToggleFavorite={onToggleFavorite}
                isFavorite={
                  session
                    ? (userData?.favorites ?? []).includes(activity._id)
                    : false
                }
              />
            </li>
          ))}
        </StyledList>
      )}
      <ToggleMapButton type="button" onClick={handleMapView}>
        Show Map
      </ToggleMapButton>
    </>
  );
}

const ToggleMapButton = styled.button`
  position: fixed;
  font-size: 1.5rem;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--background-map-button);
  color: var(--map-button-text);
  padding: 0.5rem 0.8rem;
  border-radius: var(--border-radius);
  z-index: 100;
  cursor: pointer;
`;
