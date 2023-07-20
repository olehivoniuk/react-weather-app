import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  const temperatureRef = React.useRef(null);

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature" ref={temperatureRef}>
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>°F</a>
        </span>
      </div>
    );
  } else {
    // Calculate temperature in Fahrenheit
    const fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature" ref={temperatureRef}>
          {Math.round(fahrenheit)}
        </span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>°C</a> |
          °F
        </span>
      </div>
    );
  }
}

