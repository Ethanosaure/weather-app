import { fetch_weather } from "./js/fetch-temp.js";
import { autocomplete } from "./js/fetch-autocomplete.js";
import { base } from "./js/base.js";
const btn = document.querySelector(".weather_btn");
const input = document.querySelector(".weather_input");
base();
const city = document.querySelector(".city");

// button that calls the function
btn.addEventListener("click", async () => await fetch_weather());
input.addEventListener("keypress", async function (event) {
  if (event.keyCode == 13) {
    await fetch_weather();
    city.innerText = input.value;
  }
});
input.addEventListener("input", () => autocomplete());
