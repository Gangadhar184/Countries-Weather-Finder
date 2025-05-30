import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WEATHER_API_KEY } from "./constants";

const Weather = () => {
  const navigate = useNavigate();
  const { capital } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!capital) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message || 'Weather not found');
        }
        setWeatherData(data);

      } catch (error) {

        console.error("not found", error)
      }
    };

    fetchWeather();
  }, [capital]);



  if (!weatherData) {
    return <div>Searcing for weather data for {capital}...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
