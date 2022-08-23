let container = document.getElementsByClassName("top");
let weatherIcon = document.getElementsByClassName("weather-icon");
let weatherDescription = document.getElementsByClassName("weather-description");
let weatherLocation = document.getElementsByClassName("weather-location");
let weatherDegree = document.getElementsByClassName("weather-degrees");
let longitude = document.getElementsByClassName("longitude");
let latitude = document.getElementsByClassName("latitude");
let humidity = document.getElementsByClassName("humidity-text");
let windSpeed = document.getElementsByClassName("wind-speed-text");

async function weather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=703187020dd586d7b25f60630a84f32e", { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);

    // get the correct weather icon to display
    if (weatherData.weather[0].main === "Clear") {
        weatherIcon[0].src = "img/sun.png";
        document.body.style.backgroundImage = "url('img/sunny-background.jpg')";
    }
    else if (weatherData.weather[0].main === "Clouds") {
        weatherIcon[0].src = "img/cloud.png";
        document.body.style.backgroundImage = "url('img/cloudy-background.jpg')";
    }

    // get the weather description
    weatherDescription[0].innerText = weatherData.weather[0].main;

    // get weather location
    weatherLocation[0].innerHTML = weatherData.name;

    // get weather degree (conversion from Kelvin to Fahrenheit)
    weatherDegree[0].innerText = Math.round((9/5 * (weatherData.main.temp -273.15) + 32) * 10) / 10;
    weatherDegree[0].innerText += "° F"

    // update longitude and latitutde
    longitude[0].textContent += weatherData.coord.lon + "°";
    latitude[0].textContent += weatherData.coord.lat + "°";

    // update humidity
    humidity[0].textContent += weatherData.main.humidity + "%";

    // update windspeed
    windSpeed[0].textContent += weatherData.wind.speed + " m/s";
}

weather();