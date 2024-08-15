import ActivityCard from "@/components/ActivityCard";
import { StyledList } from "@/styles";
import CategoryIcons from "@/components/CategoryIcons";
import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapOverView"), {
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
        <MapComponent isMapOverView markers={markersData}></MapComponent>
      ) : (
        <StyledList>
          {activityData.map((activity) => (
            <li key={activity._id}>
              <ActivityCard
                activity={activity}
                onToggleFavorite={onToggleFavorite}
                isFavorite={
                  session ? userData?.favorites.includes(activity._id) : false
                }
              />
            </li>
          ))}
        </StyledList>
      )}
      <button type="button" onClick={handleMapView}>
        Mapview
      </button>
    </>
  );
}
