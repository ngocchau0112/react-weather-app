import React from "react";
// eslint-disable-next-line
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <div className="weather-icon">
      <ReactAnimatedWeather
        icon={props.icon}
        color="white"
        size={props.size}
        animate="true"
      />
    </div>
  );
}
