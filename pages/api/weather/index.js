const OPENWEATHER_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { lat, lng } = request.body;

    if (!lat || !lng) {
      return response
        .status(400)
        .json({ error: "Latitude and Longitude are required" });
    }

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPENWEATHER_KEY}&units=metric`
        ),
      ]);

      if (!weatherResponse.ok) {
        return response
          .status(weatherResponse.status)
          .json({ error: "Failed to fetch weather data" });
      }

      if (!forecastResponse.ok) {
        return response
          .status(forecastResponse.status)
          .json({ error: "Failed to fetch forecast data" });
      }

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      return response
        .status(200)
        .json({ weather: weatherData, forecast: forecastData });
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
