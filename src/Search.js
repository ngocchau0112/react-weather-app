import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import ReactLoading from "react-loading";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleSubmit(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "Wednesday 8:42 AM",
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weather.ready) {
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
          <WeatherIcon icon="CLEAR_DAY" size="130" />
          <div className="main-temp">
            {weather.temp}°C <span className="smaller">| °F</span>
          </div>
          <div className="city">{weather.city}</div>
          <div className="information">
            <div className="time">{weather.date}</div>
            <div className="description">{weather.description}</div>
            <ul>
              <li className="humidity">Humidity: {weather.humidity}%</li>
              <li className="wind">Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return (
      <div class="loading">
        <div class="d-flex justify-content-center">
          <ReactLoading
            type="spinningBubbles"
            color="#0F506E"
            height={300}
            width={200}
          />
        </div>
      </div>
    );
  }
}
