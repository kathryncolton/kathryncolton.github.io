/***** API KEY: fc8ab8069c71abb7 ***/
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/fc8ab8069c71abb7/conditions/q/MI/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    
    
    document.getElementById('APIhigh').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('currentCond').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    
    var iconOrig = weatherInfo.current_observation.icon_url;
    var iconReplace = iconOrig.replace("http", "https");
    document.getElementById('weatherIcon').src = iconReplace;
    
}



var forecastObject = new XMLHttpRequest();

forecastObject.open('GET', 'https://api.wunderground.com/api/fc8ab8069c71abb7/forecast/q/MI/Greenville.json', true);

forecastObject.send();

forecastObject.onload = function() {
    
    var forecastInfo = JSON.parse(forecastObject.responseText);
    
    document.getElementById('forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById('high').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    
    document.getElementById('low').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}