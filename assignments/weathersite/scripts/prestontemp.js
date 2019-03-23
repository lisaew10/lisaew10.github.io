var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weatherData = weatherRequest.response;
        var icon_path = "https://openweathermap.org/img/w/";

        document.getElementById('headerIcon').src = icon_path + weatherData.weather[0].icon + ".png";   
        document.getElementById('headerTemp').innerHTML = weatherData.main.temp;
};