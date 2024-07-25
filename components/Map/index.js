import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";
import { useEffect } from "react";
import { useState } from "react";

const UpdateMapView = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 13);
    }
  }, [lat, lng, map]);

  return null;
};

export default function Map({ lat, lng, draggable, onMarkerDragEnd }) {
  return (
    <StyledMapContainer center={[lat, lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        draggable={draggable}
        position={[lat, lng]}
        icon={MapMarker}
        eventHandlers={{
          dragend: (event) => {
            const { lat, lng } = event.target.getLatLng();
            console.log(lat, lng);
            onMarkerDragEnd(lat, lng);
          },
        }}
      />
      <UpdateMapView lat={lat} lng={lng} />
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 40vh;
  width: 100%;
`;

const MapMarker = new Icon({
  iconUrl: "/icons/mapMarker.svg",
  iconSize: [42, 42],
});
