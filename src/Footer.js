import React from "react";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center">
      This project was coded by{" "}
      <a
        className="link"
        href="https://github.com/ngocchau0112"
        target="_blank"
        rel="noreferrer"
      >
        Ngoc Chau
      </a>{" "}
      and is{" "}
      <a
        className="link"
        href="https://github.com/ngocchau0112/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>
    </div>
  );
}
