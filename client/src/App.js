import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (city.trim()) {
      try { const response = await fetch(`http://localhost:5000/weather?city=${city}`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        setWeather(data);

      } catch (error) {
        setWeather(null);
        alert(error.message);
      }
    }
  };

  return (
    
    <div className="weather-app">
      <h1>GlobalClima</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>See your city's Weather</button>
    
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}&#8451;</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
    
  );
};

export default App;
