import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast d-flex justify-content-center">
        <div className="row">
          <div className="col text-center">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col text-center">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col text-center">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col text-center">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col text-center">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e39c2d2fa97742a130427a035ad0b7a5";
    let lon = props.coord.lon.toFixed(2);
    let lat = props.coord.lat.toFixed(2);
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
