const API_KEY = "dba7e1306373aaeff58336dc766274bd";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>Temp: ${data.main.temp} °C</p>
    <p>${data.weather[0].description}</p>
  `;
}
