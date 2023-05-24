export function create_chart(weather) {
  let div = document.querySelector("#chart_div");
  div.innerHTML = "";
  div.innerHTML += `<canvas id="myChart"></canvas>`;
  let data_array = [];
  const ctx = document.getElementById("myChart");
  for (let i = 0; i < 40; i += 8) {
    let temperature = weather.list[i].main.temp;
    data_array.push(temperature);
  }
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["today", "tomorrow", "in 2 days", "in 3 days", "in 4 days"],
      datasets: [
        {
          label: "temperature °C",
          data: data_array,
          borderWidth: 1,
          borderColor: "red",
          font: {
            family: 20,
          },
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  div.appendChild(ctx);
}
