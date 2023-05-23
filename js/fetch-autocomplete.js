export function autocomplete() {
  let input = document.querySelector(".weather_input").value;
  const div = document.querySelector(".autocomplete");
  let options = {
    method: "GET",
    headers: { "x-api-key": "K2HD9WqSrlqaFu59wE5zvg==CvClWygwWZIPAxvb" },
  };

  let url = `https://api.api-ninjas.com/v1/city?limit=10&name=${input}`;

  fetch(url, options)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      div.innerHTML = "";
      console.log(data);
      data.forEach((element) => {
        const suggestions = document.createElement("span");
        suggestions.textContent = `${element.name},${element.country} `;
        suggestions.addEventListener("click", () => {
          input = element.name;
        });
        div.appendChild(suggestions);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
