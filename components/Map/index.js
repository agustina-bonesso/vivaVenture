import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";

export default function Map({ lat, lng }) {
  return (
    <StyledMapContainer center={[lat, lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={IconMarker} />
    </StyledMapContainer>
  );
}
const StyledMapContainer = styled(MapContainer)`
  height: 40vh;
  width: 90%;
`;

const IconMarker = new Icon({
  iconUrl: "/icons/mapMarker.svg",
  iconSize: [32, 32],
});
