export async function fetch_photo() {
  const input = document.querySelector(".weather_input").value;
  const div = document.querySelector(".weather_div");
  const photo = await fetch(
    `https://api.unsplash.com/search/photos?&query=${input}&client_id=IawRnbSRF6GSjr6fuo7S4TnrOOKWmBB30HIY71fzGkI`
  )
    .then((res) => res.json())
    .then((json) => {
      const img = document.querySelector("#country_photo");
      if (!json.results[0]) {
        return;
      }
      img.src = json.results[0].urls.regular;
    })
    .catch((error) => {
      console.log("there is an error with the photo", error);
      throw new Error(error);
    });
}
