import { fetch_weather } from "./js/fetch-temp.js";
import { autocomplete } from "./js/fetch-autocomplete.js";
const btn = document.querySelector(".weather_btn");
const div = document.querySelector(".weather_div");
const input = document.querySelector(".weather_input");

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
  const humidity = document.createElement("span");
  humidity.setAttribute("id", `humidity${i}`);
  const clouds = document.createElement("span");
  clouds.setAttribute("id", `clouds${i}`);
  const description = document.createElement("span");
  description.setAttribute("id", `description${i}`);

  temp.appendChild(temperature);
  temp.appendChild(humidity);
  temp.appendChild(clouds);
  temp.appendChild(description);
}

// photos
const country_photo = document.createElement("img");
country_photo.setAttribute("id", "country_photo");

// append everything
div.appendChild(country_photo);
div.appendChild(temp);
div.appendChild(lat);
div.appendChild(lon);

// button that calls the function
btn.addEventListener("click", async () => await fetch_weather());
input.addEventListener("keypress", async function (event) {
  if (event.keyCode == 13) {
    await fetch_weather();
  }
});
input.addEventListener("input", () => autocomplete());
