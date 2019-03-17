//current weather
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('mainWeather').innerHTML = weatherData.weather.main;
    document.getElementById('mainTemp').innerHTML = weatherData.main.temp;
    document.getElementById('humid').innerHTML = weatherData.main.humidity;
    // document.getElementById('rain').innerHTML = weatherData.rain.3h;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;

    // var iconcode = weatherInfo.weather[0].icon;
    // var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // document.getElementById('weather_icon').src = icon_path;
}



// forecast
var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

forecastRequest.send();

forecastRequest.onload = function () {
    var forecastData = JSON.parse(forecastRequest.responseText);

    document.getElementById('temp1').innerHTML = forecastData.list[0].main.temp;
    document.getElementById('temp2').innerHTML = forecastData.list[1].main.temp;
    document.getElementById('temp3').innerHTML = forecastData.list[2].main.temp;
    document.getElementById('temp4').innerHTML = forecastData.list[3].main.temp;
    document.getElementById('temp5').innerHTML = forecastData.list[4].main.temp;



}