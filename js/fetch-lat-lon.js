export async function fetch_lat_lon() {
  const input = document.querySelector(".weather_input").value;
  const div = document.querySelector(".weather_div");
  await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=9225cc9b037b83b808d5b41d51dc7fe5`
  )
    .then((res) => res.json())
    .then((json) => {
      const lat = document.querySelector("#lat");
      lat.value = json[0].lat;
      const lon = document.querySelector("#lon");
      lon.value = json[0].lon;
    })
    .catch((error) => {
      console.log("there is an error", error);
      throw new Error(error);
    });

  div.appendChild(lat);
  div.appendChild(lon);
}
