export function autocomplete() {
  let input = document.querySelector(".weather_input");
  const div = document.querySelector(".autocomplete");
  if (input.value == "") {
    return;
  }
  let options = {
    method: "GET",
    headers: { "x-api-key": "K2HD9WqSrlqaFu59wE5zvg==CvClWygwWZIPAxvb" },
  };

  let url = `https://api.api-ninjas.com/v1/city?limit=10&name=${input.value}`;

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      div.innerHTML = "";
      const suggestions = document.createElement("select");
      suggestions.setAttribute("id", "select");
      div.appendChild(suggestions);
      data.forEach((element) => {
        let suggestion = document.createElement("option");
        suggestion.textContent = `${element.name},${element.country} `;
        suggestion.addEventListener("click", function () {
          input.value = `${element.name}`;
        });
        suggestions.appendChild(suggestion);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
