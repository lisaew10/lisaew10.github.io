var apiDaily = 'https://api.openweathermap.org/data/2.5/weather?zip=02478,us&APPID=24b87aad01e054f85a32cef48af44129&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiDaily, true);

weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weatherData = weatherRequest.response;
   
        document.getElementById('mainWeatherBos').innerHTML = weatherData.weather[0].main;
        document.getElementById('mainTempBos').innerHTML = weatherData.main.temp;
        document.getElementById('humidBos').innerHTML = weatherData.main.humidity;
        document.getElementById('windSpeedBos').innerHTML = weatherData.wind.speed;

}