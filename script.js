import { fetch_weather } from "./js/fetch-temp.js";
import { autocomplete } from "./js/fetch-autocomplete.js";
import { background } from "./js/background-function.js";
const btn = document.querySelector(".weather_btn");
const div = document.querySelector(".weather_div");
const input = document.querySelector(".weather_input");

// lattitude
const lat = document.createElement("span");
lat.setAttribute("id", "lat");

// longitude
const lon = document.createElement("span");
lon.setAttribute("id", "lon");

//
const temp = document.createElement("div");
temp.setAttribute("id", "temp");
for (let i = 0; i < 40; i += 8) {
  const day = document.createElement("span");
  day.setAttribute("id", `day${i}`);
  day.setAttribute("class", "day");
  //
  const temperature = document.createElement("span");
  temperature.setAttribute("id", `temperature${i}`);
  temperature.setAttribute("class", "temperature");
  //
  const humidity = document.createElement("span");
  humidity.setAttribute("id", `humidity${i}`);
  humidity.setAttribute("class", "humidity");
  //
  const clouds = document.createElement("span");
  clouds.setAttribute("id", `clouds${i}`);
  clouds.setAttribute("class", "clouds");
  //
  const description = document.createElement("span");
  description.setAttribute("id", `description${i}`);
  description.setAttribute("class", "description");
  //
  const content_div = document.createElement("div");
  content_div.setAttribute("id", `div${i}`);
  content_div.setAttribute("class", "content_div");

  content_div.appendChild(day);
  content_div.appendChild(temperature);
  content_div.appendChild(humidity);
  content_div.appendChild(clouds);
  content_div.appendChild(description);
  temp.appendChild(content_div);
}
// photos
const country_photo = document.createElement("img");
country_photo.setAttribute("id", "country_photo");

let city = document.createElement("span");
city.setAttribute("class", "city");
temp.appendChild(city);

// append everything
div.appendChild(country_photo);
div.appendChild(temp);
div.appendChild(lat);
div.appendChild(lon);

// button that calls the function
btn.addEventListener("click", async () => await fetch_weather());
btn.addEventListener("click", () => background());
input.addEventListener("keypress", async function (event) {
  if (event.keyCode == 13) {
    await fetch_weather();
    background();
    city.innerText = input.value;
  }
});
input.addEventListener("input", () => autocomplete());
