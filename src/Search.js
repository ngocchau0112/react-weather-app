import React, { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function getWeather(response) {
    setWeather({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "e39c2d2fa97742a130427a035ad0b7a5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(input) {
    setCity(input.target.value);
  }

  if (weather.ready) {
    return (
      <div className="search">
        <form
          className="search-form d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control col-6"
            type="search"
            placeholder="Enter a Location"
            onChange={handleCityChange}
          />
          <input type="submit" className="btn btn-light mb-2" value="Search" />
        </form>
        <WeatherInfo data={weather} />
        <Forecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <div className="d-flex justify-content-center">
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
