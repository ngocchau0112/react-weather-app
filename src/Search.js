import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form d-flex justify-content-center">
        <input
          class="form-control col-6"
          type="search"
          placeholder="Enter a Location"
        />
        <button type="submit" class="btn btn-light mb-2">
          Search
        </button>
      </form>
      <div className="show-weather text-center">
        <WeatherIcon icon="PARTLY_CLOUDY_DAY" size="130" />
        <div className="main-temp">
          12°C <span className="smaller">| °F</span>
        </div>
        <div className="city">Ho Chi Minh City</div>
        <div className="information">
          <div className="time">Wednesday 8:42 AM</div>
          <div className="description">Moderate Rain</div>
          <ul>
            <li className="humidity">Humidity: 90%</li>
            <li className="wind">Wind: 2.06km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
