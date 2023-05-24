import { fetch_photo } from "./fetch-photo.js";
import { fetch_lat_lon } from "./fetch-lat-lon.js";
import { create_chart } from "./create-chart.js";
export async function fetch_weather() {
  await fetch_lat_lon();

  const lat = document.querySelector("#lat").value;
  const lon = document.querySelector("#lon").value;
  const temp = document.querySelector("#temp");
  const input = document.querySelector(".weather_input");

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
    if (weather.list === undefined) {
      return;
    }
    const day = document.querySelector(`#day${i}`);
    day.textContent = `${days[y - i]} `;
    const clouds = document.querySelector(`#clouds${i}`);
    clouds.textContent = `weather: ${weather.list[i].weather[0].main} `;
    const temperature = document.querySelector(`#temperature${i}`);
    const humidity = document.querySelector(`#humidity${i}`);
    temperature.textContent = `temperature: ${weather.list[i].main.temp}°C`;
    humidity.textContent = `humidity: ${weather.list[i].main.humidity}% `;
    const description = document.querySelector(`#description${i}`);
    description.textContent = `description: ${weather.list[i].weather[0].description} `;
    const div = document.querySelector(`#div${i}`);

    if (weather.list[0].weather[0].main === "Clouds") {
      document.body.style.backgroundImage = `url(assets/nuages-139.jpg)`;
    }
    if (weather.list[0].weather[0].main === "Rain") {
      document.body.style.backgroundImage = `url(assets/cloud-rain-raining-sad-wallpaper-preview.jpg)`;
    }
    if (weather.list[0].weather[0].main === "Clear") {
      document.body.style.backgroundImage = "url(assets/soleil.jpg)";
    }
    if (weather.list[0].weather[0].main === "") {
      document.body.style.backgroundImage = "url(assets/venteux.jpg)";
    }
    // append
    div.appendChild(day);
    div.appendChild(humidity);
    div.appendChild(temperature);
    div.appendChild(clouds);
    div.appendChild(description);
    temp.appendChild(div);

    y += 9;
  }

  fetch_photo();
  create_chart(weather);
  const city = document.querySelector(".city");
  city.innerHTML = input.value;
}
