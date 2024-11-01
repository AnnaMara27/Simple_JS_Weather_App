const apiKey = "45e23f7f83a255d1d561eb02dcbfc365";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDetails = document.getElementById("weather-details");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});

function displayWeather(data) {
  weatherDetails.innerHTML = `
  <h2>Your city: ${data.name}</h2>
  <p>Temperature: ${data.main.temp}°C</P>
  <p>Weather: ${data.weather[0].description}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind Speed: ${data.wind.speed} m/s</p>`;
}
