import { fetch_weather } from "./js/fetch-temp.js";
const btn = document.querySelector(".weather_btn");
const div = document.querySelector(".weather_div");

// lattitude
const lat = document.createElement("span");
lat.setAttribute("id", "lat");

// longitude
const lon = document.createElement("span");
lon.setAttribute("id", "lon");

// temperature
const temp = document.createElement("div");
temp.setAttribute("id", "temp");
for (let i = 0; i < 40; i += 8) {
  const temperature = document.createElement("span");
  temperature.setAttribute("id", `temperature${i}`);
  temp.appendChild(temperature);
}

// humidity
const humidity = document.createElement("span");
humidity.setAttribute("id", "humidity");

// photos
const country_photo = document.createElement("img");
country_photo.setAttribute("id", "country_photo");

// append everything
div.appendChild(country_photo);
div.appendChild(temp);
div.appendChild(lat);
div.appendChild(lon);
div.appendChild(humidity);

// button that calls the function
btn.addEventListener("click", async () => await fetch_weather());
