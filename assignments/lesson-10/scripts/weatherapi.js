var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=24b87aad01e054f85a32cef48af44129&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherRequest);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;



}

