/***** API KEY: fc8ab8069c71abb7 ***/
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/fc8ab8069c71abb7/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('APIhigh').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('currentCond').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    
}


var forecastObject = new XMLHttpRequest();

forecastObject.open('GET', 'https://api.wunderground.com/api/fc8ab8069c71abb7/forecast/q/MN/Franklin.json', true);

forecastObject.send();

forecastObject.onload = function() {
    var forecastInfo = JSON.parse(forecastObject.responseText);
    console.log(forecastInfo);
    
    document.getElementById('forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}