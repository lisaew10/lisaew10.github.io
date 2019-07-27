var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weatherData = weatherRequest.response;
        var icon_path = "https://openweathermap.org/img/w/";

        // console.log(weatherData);
       
        document.getElementById('mainTemp').innerHTML = weatherData.main.temp;
};