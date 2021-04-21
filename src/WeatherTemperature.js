import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="main-temp">
        {props.celsius}°C{" "}
        <span className="smaller-temp">
          |{" "}
          <a href="/" className="tempConvert" onClick={convertToF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="main-temp">
        {Math.round(fahrenheit())}°F{" "}
        <span className="smaller-temp">
          |{" "}
          <a href="/" className="tempConvert" onClick={convertToC}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
