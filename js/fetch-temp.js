import { fetch_photo } from "./fetch-photo.js";
import { fetch_lat_lon } from "./fetch-lat-lon.js";
export async function fetch_weather() {
  await fetch_lat_lon();
  const div = document.querySelector(".weather_div");
  const lat = document.querySelector("#lat").value;
  const lon = document.querySelector("#lon").value;
  const temp = document.querySelector("#temp");
  const humidity = document.querySelector("#humidity");

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&unit=metric&appid=9225cc9b037b83b808d5b41d51dc7fe5&units=metric
    `
  )
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
  for (let i = 0; i < 5; i++) {
    const temperature = document.querySelector(`#temperature${i}`);
    temperature.textContent = weather.list[i].main.temp;
    temp.appendChild(temperature);
  }

  fetch_photo();
}
