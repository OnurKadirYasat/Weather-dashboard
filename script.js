const API_KEY = "dba7e1306373aaeff58336dc766274bd";
const result = document.getElementById("result");

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) return;

  result.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!res.ok) throw new Error();

    const data = await res.json();

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ ${Math.round(data.main.temp)} °C</p>
      <p>☁️ ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    result.innerHTML = "City not found ❌";
  }
}

document.getElementById("cityInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather();
});
