import { fetch_photo } from "./fetch-photo.js";
export async function fetch_api() {
  const input = document.querySelector(".weather_input").value;
  const div = document.querySelector(".weather_div");
  const api = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=9225cc9b037b83b808d5b41d51dc7fe5`
  )
    .then((res) => res.json())
    .then((json) => {
      const lat = document.querySelector("#lat");
      lat.textContent = json.lat;
      const lon = document.querySelector("#lon");
      lon.textContent = json.lon;
      //   const temp = document.querySelector("#temp");
      //     temp.textContent = json[0].
      //   const humidity = document.querySelector("#humidity");
      fetch_photo();
    })
    .catch((error) => {
      console.log("there is an error", error);
      throw new Error(error);
    });
  console.log(api);

  div.appendChild(temp);
  div.appendChild(lat);
  div.appendChild(lon);
}
