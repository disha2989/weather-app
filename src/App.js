import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Ensure this is correctly imported

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch weather data.');
    }
  };

  return (
    <div className="App"> {/* Ensure className is "App" */}
      <h1>Weather App by Disha</h1>
      <WeatherForm onSubmit={fetchWeather} />
      {error && <p className="error">{error}</p>}
      <WeatherDisplay weather={weather} />
      <button onClick={() => window.open('https://www.linkedin.com/company/pm-accelerator/')}>
        Info
      </button>
    </div>
  );
};

export default App;
