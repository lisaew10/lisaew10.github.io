function getWeather(zipCode) {


        var apiDaily = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode +
                ',us&APPID=24b87aad01e054f85a32cef48af44129&units=imperial';

        var weatherRequest = new XMLHttpRequest();

        weatherRequest.open('GET', apiDaily, true);

        weatherRequest.responseType = 'json';
        weatherRequest.send();

        weatherRequest.onload = function () {
                var weatherData = weatherRequest.response;
                if (zipCode === '29061') {
                        document.getElementById('mainWeather').innerHTML = weatherData.weather[0].main;
                        document.getElementById('mainTemp').innerHTML = weatherData.main.temp;
                        document.getElementById('humid').innerHTML = weatherData.main.humidity;
                        document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
                } else if (zipCode === '19103') {
                        document.getElementById('mainWeatherPhi').innerHTML = weatherData.weather[0].main;
                        document.getElementById('mainTempPhi').innerHTML = weatherData.main.temp;
                        document.getElementById('humidPhi').innerHTML = weatherData.main.humidity;
                        document.getElementById('windSpeedPhi').innerHTML = weatherData.wind.speed;
                } else if (zipCode === '02478') {
                        document.getElementById('mainWeatherBos').innerHTML = weatherData.weather[0].main;
                        document.getElementById('mainTempBos').innerHTML = weatherData.main.temp;
                        document.getElementById('humidBos').innerHTML = weatherData.main.humidity;
                        document.getElementById('windSpeedBos').innerHTML = weatherData.wind.speed;
                } else if (zipCode === '10023') {
                        document.getElementById('mainWeatherMan').innerHTML = weatherData.weather[0].main;
                        document.getElementById('mainTempMan').innerHTML = weatherData.main.temp;
                        document.getElementById('humidMan').innerHTML = weatherData.main.humidity;
                        document.getElementById('windSpeedMan').innerHTML = weatherData.wind.speed;

                }
        }
}
getWeather('29061');
getWeather('19103');
getWeather('02478');
getWeather('10023');