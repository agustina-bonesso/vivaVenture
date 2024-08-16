import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/StyledLinks";

export default function Map({ markers }) {
  const router = useRouter();
  return (
    <MapWrapper>
      <StyledMapContainer center={[27.06, -0.175]} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.geoCode} icon={MapMarker}>
              <Popup>
                <StyledLink href={`/${marker.id}`}>{marker.popUp}</StyledLink>
              </Popup>
            </Marker>
          );
        })}
      </StyledMapContainer>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  height: 70vh;
  width: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  margin: 5rem 0;
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
