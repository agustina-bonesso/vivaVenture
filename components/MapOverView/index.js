import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";


export default function Map({ markers }) {
  markers.map((marker) => console.log(marker.geoCode));
  return (
    <MapWrapper>
      <StyledMapContainer center={[0, 0]} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.geoCode} icon={MapMarker}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          );
        })}
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
