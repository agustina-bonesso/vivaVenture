import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";
import { useEffect } from "react";

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
    <MapWrapper>
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
              onMarkerDragEnd(lat, lng);
            },
          }}
        />
        <UpdateMapView lat={lat} lng={lng} />
      </StyledMapContainer>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  height: 40vh;
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  margin: 1rem 0;
  position: relative;
  z-index: 1;
`;

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

const MapMarker = new Icon({
  iconUrl: "/icons/mapMarker.svg",
  iconSize: [42, 42],
});
