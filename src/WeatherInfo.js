import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="show-weather text-center">
      <WeatherIcon code={props.data.icon} size="130" />
      <div className="main-temp">
        {props.data.temp}°C <span className="smaller">| °F</span>
      </div>
      <div className="city">{props.data.city}</div>
      <div className="information">
        <div className="time">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="description">{props.data.description}</div>
        <ul>
          <li className="humidity">Humidity: {props.data.humidity}%</li>
          <li className="wind">Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
