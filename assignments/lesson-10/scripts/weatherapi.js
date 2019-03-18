var dayNames = new Array(7);
dayNames[0] = "Sun";
dayNames[1] = "Mon";
dayNames[2] = "Tue";
dayNames[3] = "Wed";
dayNames[4] = "Thur";
dayNames[5] = "Fri";
dayNames[6] = "Sat";

//current weather
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var icon_path = "https://openweathermap.org/img/w/";

    // console.log(weatherData);
    document.getElementById('summaryIcon').src = icon_path + weatherData.weather[0].icon + ".png";
    document.getElementById('mainWeather').innerHTML = weatherData.weather[0].main;
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
    var icon_path = "https://openweathermap.org/img/w/";

    document.getElementById("day0").innerHTML = dayNames[new Date(forecastData.list[0].dt_txt).getDay()];
    document.getElementById("icon0").src = icon_path + forecastData.list[0].weather[0].icon + ".png";
    document.getElementById("temp0").innerHTML = forecastData.list[0].main.temp;

    document.getElementById("day1").innerHTML = dayNames[new Date(forecastData.list[8].dt_txt).getDay()];
    document.getElementById("icon1").src = icon_path + forecastData.list[8].weather[0].icon + ".png";
    document.getElementById("temp1").innerHTML = forecastData.list[8].main.temp;

    document.getElementById("day2").innerHTML = dayNames[new Date(forecastData.list[16].dt_txt).getDay()];
    document.getElementById("icon2").src = icon_path + forecastData.list[16].weather[0].icon + ".png";
    document.getElementById("temp2").innerHTML = forecastData.list[16].main.temp;

    document.getElementById("day3").innerHTML = dayNames[new Date(forecastData.list[24].dt_txt).getDay()];
    document.getElementById("icon3").src = icon_path + forecastData.list[24].weather[0].icon + ".png";
    document.getElementById("temp3").innerHTML = forecastData.list[24].main.temp;

    document.getElementById("day4").innerHTML = dayNames[new Date(forecastData.list[32].dt_txt).getDay()];
    document.getElementById("icon4").src = icon_path + forecastData.list[32].weather[0].icon + ".png";
    document.getElementById("temp4").innerHTML = forecastData.list[32].main.temp;



}