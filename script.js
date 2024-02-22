
document.addEventListener('DOMContentLoaded', function () {

    fetchWeather('Bengaluru');
});

document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('search').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = 'a87c344c3c84ec76bdc41b14696fc7de';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Description: ${data.weather[0].description}</p>
        `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
