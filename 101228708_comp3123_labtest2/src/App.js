import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>123456789_comp3123_labtest2 Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
      </header>
      <Weather city={city} />
    </div>
  );
}

export default App;
