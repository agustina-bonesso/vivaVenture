import styled from "styled-components";
const OPENWEATHER_USER = process.env.REACT_APP_OPENWEATHER_ID;

export default function WeatherInformation({ activity }) {
  async function fetchWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${activity.lat}&lon=${activity.lng}&appid=${OPENWEATHER_USER}`
    );
    const data = await response.json();
    console.log(OPENWEATHER_USER);
    console.log(data);
  }
  fetchWeather();
  return <WeatherContainer></WeatherContainer>;
}

const WeatherContainer = styled.div`
  margin-top: 2rem;
`;
