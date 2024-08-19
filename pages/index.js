import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Icon } from "@/components/Icon";

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
  const [showButton, setShowButton] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const markersData = activityData.map((activity) => {
    return {
      geoCode: [activity.lat, activity.lng],
      popUp: `Activity: ${activity.title}`,
      id: `${activity._id}`,
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setShowButton(true);
      }, 500);

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

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
      {showButton && (
        <StyledMapButton type="button" onClick={handleMapView}>
          <Prefix>Show </Prefix>
          {isMapOpen ? "List" : "Map"}
          <Icon name={isMapOpen ? "listIcon" : "mapIcon"} />
        </StyledMapButton>
      )}
    </>
  );
}

const Prefix = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    font-family: var(--font-h1);
  }
  @media (min-width: 1200px) {
    font-size: 1.125rem;
  }
`;

const StyledMapButton = styled.button`
  position: fixed;
  bottom: 10%;
  left: 50%;
  gap: 0.3125rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: var(--background-map-button);
  color: var(--map-button-text);
  border: none;
  border-radius: 3.125rem;
  font-size: 0.875rem;
  font-family: var(--font-h1);
  box-shadow: var(--box-shadow);
  z-index: 20;
  cursor: pointer;
  &:hover {
    background-color: var(--light-orange);
  }
  & svg {
    fill: var(--map-button-text);
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem;
    padding: 0.75rem 1.5625rem;
    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
