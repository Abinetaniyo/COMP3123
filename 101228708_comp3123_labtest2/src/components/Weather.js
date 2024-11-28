import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key.

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!weather) {
    return <p>Could not fetch weather data. Try again later.</p>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default Weather;
