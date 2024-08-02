import { useState, useEffect } from "react";
import styled from "styled-components";

export default function WeatherInformation({ activity }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const OPENWEATHER_KEY = process.env.OPENWEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${activity.lat}&lon=${activity.lng}&appid=${OPENWEATHER_KEY}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          console.error("Error fetching weather data:", data);
        }

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${activity.lat}&lon=${activity.lng}&appid=${OPENWEATHER_KEY}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        if (forecastResponse.ok) {
          const dailyForecast = forecastData.list
            .filter((forecast) => new Date(forecast.dt_txt).getHours() === 12)
            .slice(1, 5);
          setForecastData(dailyForecast);
        } else {
          console.error("Error fetching forecast data:", forecastData);
        }
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    }
    fetchWeather();
  }, [activity.lat, activity.lng, OPENWEATHER_KEY]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weatherData.main.temp);
  const humidity = weatherData.main.humidity;
  const speed = weatherData.wind.speed;
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;

  return (
    <WeatherContainer>
      <CurrentWeatherCard>
        <WeatherHeader>
          <Location>{activity.city}</Location>
          <Temperature>{temperature}°C</Temperature>
        </WeatherHeader>
        <WeatherContent>
          <Description>{description}</Description>
          <WeatherIcon
            src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="weather icon"
          />
        </WeatherContent>
        <WeatherDetails>
          <Detail>Wind: {speed} km/h</Detail>
          <Detail>Humidity: {humidity}%</Detail>
        </WeatherDetails>
      </CurrentWeatherCard>
      <ForecastContainer>
        <ToggleForecastButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide Forecast" : "Show Forecast"}
        </ToggleForecastButton>
        {isOpen && (
          <ForecastContent>
            {forecastData.map((forecast) => (
              <ForecastCard key={forecast.dt}>
                <ForecastDate>
                  {new Date(forecast.dt * 1000).toLocaleDateString()}
                </ForecastDate>
                <ForecastTemperature>
                  {Math.round(forecast.main.temp)}°C
                </ForecastTemperature>
                <ForecastDescription>
                  {forecast.weather[0].description}
                </ForecastDescription>
                <WeatherIcon
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                  alt="weather icon"
                />
              </ForecastCard>
            ))}
          </ForecastContent>
        )}
      </ForecastContainer>
    </WeatherContainer>
  );
}

const WeatherContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const CurrentWeatherCard = styled.div`
  background-color: var(--weathercard-primary);
  color: var(--text-color);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 600px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
`;

const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 1.8rem;
  }
`;

const Location = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Temperature = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: var(--light-orange);
`;

const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-style: italic;
  color: var(--teal);
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const WeatherDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Detail = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const ToggleForecastButton = styled.button`
  background-color: var(--button-background);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--button-hover-background);
  }
`;

const ForecastContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

const ForecastContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ForecastCard = styled.div`
  background-color: var(--weathercard-secondary);
  color: var(--text-color);
  padding: 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  width: 120px;
  transition: background-color 0.3s, color 0.3s;

  @media (min-width: 1024px) {
    width: 150px;
  }
`;

const ForecastDate = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ForecastTemperature = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ForecastDescription = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;
