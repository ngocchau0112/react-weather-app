import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast d-flex justify-content-center">
      <div className="row">
        <div className="col text-center">
          <div className="day">Thursday</div>
          <WeatherIcon code="01d" size="40" />
          <div className="temp-types">
            <span className="max-temp">27</span>{" "}
            <span className="min-temp">14</span>
          </div>
        </div>
      </div>
    </div>
  );
}
