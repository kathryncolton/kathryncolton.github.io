 var requestURL = 'https://api.myjson.com/bins/12p62z';  
    
    var request = new XMLHttpRequest();
      
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send(); 
        
 
   request.onload = function() {
	var jsondata = request.response;
	var repairs = jsondata['services'];
       
var bronzeLength = repairs[0].services.length; 
for (var i = 0; i < bronzeLength; i++) {       
document.getElementById('bronze').innerHTML += repairs[0].services[i] + "<br>";
    }
       
var silverLength = repairs[1].services.length; 
for (var i = 0; i < silverLength; i++) {       
document.getElementById('silver').innerHTML += repairs[1].services[i] + "<br>";
    } 
       
var goldLength = repairs[2].services.length; 
for (var i = 0; i < goldLength; i++) {       
document.getElementById('gold').innerHTML += repairs[2].services[i] + "<br>";
    }        
       
}