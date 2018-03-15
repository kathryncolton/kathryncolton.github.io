 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';  
    
    var request = new XMLHttpRequest();
      
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send(); 
        
 
   request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
       
	document.getElementById('franklin').innerHTML = '"' + cities[0].motto + '"' + "<br>" + "<br>" + 'Founded ' + cities[0].yearFounded + "<br>" + 'Population ' + cities[0].currentPopulation + "<br>" + 'Avg. Rainfall ' + cities[0].averageRainfall + '"';
       
    document.getElementById('greenville').innerHTML = '"' + cities[1].motto + '"' + "<br>" + "<br>" + 'Founded ' + cities[1].yearFounded + "<br>" + 'Population ' + cities[1].currentPopulation + "<br>" + 'Avg. Rainfall ' + cities[1].averageRainfall + '"';
       
    document.getElementById('springfield').innerHTML = '"' + cities[3].motto + '"' + "<br>" + "<br>" + 'Founded ' + cities[3].yearFounded + "<br>" + 'Population ' + cities[3].currentPopulation + "<br>" + 'Avg. Rainfall ' + cities[3].averageRainfall + '"';  }    
       
       /*for (var i = 0; i < cities.length; i++) {
		if (cities.name == 'Franklin' || cities.name == 'Springfield' || cities.name == 'Greenville') {
        var city = document.createElement('h3');
		 city.textContent = cities[i].name + ' City';
    var motto = document.createElement('p');
     motto.textContent = '"' + cities[i].motto + '"';
    var year = document.createElement('p');
     year.textContent = 'Founded ' + cities[i].yearFounded; 
    var population = document.createElement('p');
     population.textContent = 'Population ' + cities[i].currentPopulation;
    var rainfall = document.createElement('p');
     rainfall.textContent = 'Avg. Rainfall ' + cities[i].averageRainfall + ' inches';    
		output.appendChild(city);
		output.appendChild(motto);
        output.appendChild(year);
        output.appendChild(population);
        output.appendChild(averageRainfall); 
        /*}
        else skip;
	}*/
   