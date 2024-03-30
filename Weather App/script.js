const city = document.getElementById("city");
const sButton = document.getElementById("btn");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind_speed");
const weatherImage = document.getElementById("weather-image");
const apiKey = "550836bbec018e3675ac393520aa361c";

async function checkW(location) {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  );
  const waitingData = await weatherData.json();
  
  if (weatherData.status === 404) {
    alert("City not found. Please enter correct city name");
  }

  const temp = waitingData.main.temp - 273.15;

  temperature.innerHTML = `Temperature: ${Math.round(temp)} °C`;
  humidity.innerHTML = ` Humidity: ${waitingData.main.humidity} %`;
  windSpeed.innerHTML = `Wind speed: ${Math.round(
    waitingData.wind.speed
  )} Km/h`;

  if (waitingData.weather[0].main === "Clear") {
    weatherImage.src = "/Images/Clear.jpg";
  } else if (waitingData.weather[0].main === "Clouds") {
    weatherImage.src = "/Images/Clouds.jpg";
  } else if (waitingData.weather[0].main === "Rain") {
    weatherImage.src = "/Images/Rain.jpg";
  } else if (waitingData.weather[0].main === "Snow") {
    weatherImage.src = "Images/Snow.jpg";
  } else if (waitingData.weather[0].main === "Haze") {
    weatherImage.src = "Images/Haze.jpg";
  }
}

sButton.addEventListener("click", function () {
  checkW(city.value);
});
