import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
