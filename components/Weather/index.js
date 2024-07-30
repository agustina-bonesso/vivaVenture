import ReactWeather, { useOpenWeather } from "react-open-weather";
import styled from "styled-components";

export default function WeatherInformation({ activity }) {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d96e39731c822f21ac8dc394bdfad639",
    lat: activity.lat,
    lon: activity.lng,
    lang: "en",
    unit: "metric",
  });

  return (
    <WeatherContainer>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={activity.city}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </WeatherContainer>
  );
}

const WeatherContainer = styled.div`
  margin-top: 2rem;
`;
