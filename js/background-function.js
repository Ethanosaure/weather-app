export function background() {
  const clouds = document.querySelector(`#clouds${0}`);
  console.log(clouds);
  if (clouds.value == "weather: Clouds") {
    document.body.style.backgroundImage = `url(assets/cloud-rain-raining-sad-wallpaper-preview.jpg)`;
    console.log(clouds);
  }
  if (clouds.textContent === "weather: Clear") {
    document.body.style.backgroundImage = `url(assets/soleil.jpg)`;
  }
}
