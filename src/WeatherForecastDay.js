import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return (
    <div className="forecast-day">
      <div className="day">{day}</div>
      <WeatherIcon code={props.data.weather[0].icon} size="40" />
      <div className="temp-types">
        <span className="max-temp">{Math.round(props.data.temp.max)}</span>{" "}
        <span className="min-temp">{Math.round(props.data.temp.min)}</span>
      </div>
    </div>
  );
}
