const apiKey = "45e23f7f83a255d1d561eb02dcbfc365";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDetails = document.getElementById("weather-details");
const dateContainerEl = document.querySelector(".date-container");

function displayTime() {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const hoursExact = now.getHours();
  const minutesExact = now.getMinutes();
  const pmAm = hoursExact >= 12 ? "PM" : "AM";
  const hours = hoursExact >= 12 ? hoursExact - 12 : hoursExact;
  const minutes = minutesExact >= 10 ? minutesExact : `0${minutesExact}`;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  dateContainerEl.innerHTML = `
      <p class="day" id="day">${weekdays[day]}</p>
        <p class="date" id="date">${months[month]} ${date}</p>
        <p class="time" id="time">${hours}:${minutes} ${pmAm}</p>`;
}

function displayWeather(data) {
  weatherDetails.classList.add("results-container");
  weatherDetails.innerHTML = `
  <h2>Your city: ${data.name}</h2>
  <p>Temperature: ${data.main.temp}°C</P>
  <p>Weather: ${data.weather[0].description}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind Speed: ${data.wind.speed} m/s</p>`;
}

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

displayTime();
