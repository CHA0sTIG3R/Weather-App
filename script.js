/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`

    const weather = fetch(Full_URL);
    return weather.then((response) => {
        return response.json();
    }).then((data) => {
        showWeatherData(data)
    })


}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)

}



/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
    city_name = document.getElementById('city-name').innerHTML = weatherData.name;
    weather_type = document.getElementById("weather-type").innerHTML = weatherData.weather[0].main;
    temp = document.getElementById("temp").innerHTML = weatherData.main.temp;
    min_temp = document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
    max_temp = document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
}