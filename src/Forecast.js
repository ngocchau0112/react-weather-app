import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="forecast d-flex justify-content-center">
      <div className="row">
        <div className="col text-center">
          <div className="day">Thursday</div>
          <WeatherIcon icon="PARTLY_CLOUDY_DAY" size="50" />
          <div className="temp-types">
            <span className="max-temp">27</span>{" "}
            <span className="min-temp">14</span>
          </div>
        </div>
        <div className="col text-center">
          <div className="day">Thursday</div>
          <WeatherIcon icon="PARTLY_CLOUDY_DAY" size="50" />
          <div className="temp-types">
            <span className="max-temp">27</span>{" "}
            <span className="min-temp">14</span>
          </div>
        </div>
        <div className="col text-center">
          <div className="day">Thursday</div>
          <WeatherIcon icon="PARTLY_CLOUDY_DAY" size="50" />
          <div className="temp-types">
            <span className="max-temp">27</span>{" "}
            <span className="min-temp">14</span>
          </div>
        </div>
      </div>
    </div>
  );
}
