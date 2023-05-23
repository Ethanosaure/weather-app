import { fetch_photo } from "./fetch-photo.js";
import { fetch_lat_lon } from "./fetch-lat-lon.js";
export async function fetch_weather() {
  await fetch_lat_lon();
  const lat = document.querySelector("#lat").value;
  const lon = document.querySelector("#lon").value;
  const temp = document.querySelector("#temp");
  const days = [
    "today: ",
    "tomorrow: ",
    "in 2 days: ",
    "in 3 days: ",
    "in 4 days: ",
  ];
  let y = 0;

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&unit=metric&appid=9225cc9b037b83b808d5b41d51dc7fe5&units=metric
    `
  )
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
  for (let i = 0; i < 40; i += 8) {
    // weather content
    const day = document.createElement("span");
    day.setAttribute("id", `day${i}`);
    day.textContent = `${days[y - i]} `;
    const clouds = document.querySelector(`#clouds${i}`);
    clouds.textContent = `weather: ${weather.list[i].weather[0].main} `;
    const temperature = document.querySelector(`#temperature${i}`);
    const humidity = document.querySelector(`#humidity${i}`);
    temperature.textContent = `temperature: ${weather.list[i].main.temp}°C `;
    humidity.textContent = `humidity: ${weather.list[i].main.humidity}% `;
    const description = document.querySelector(`#description${i}`);
    description.textContent = `description: ${weather.list[i].weather[0].description} `;

    // append
    temp.appendChild(day);
    temp.appendChild(humidity);
    temp.appendChild(temperature);
    temp.appendChild(clouds);
    temp.appendChild(description);
    y += 9;
  }

  fetch_photo();
}
