var high = parseFloat(document.getElementById('high').value);
var low = parseFloat(document.getElementById('low').value);
var speed = parseFloat(document.getElementById('speed').value);

var avTemp = (high + low) / 2;

var f = 35.74 + 0.6215 * avTemp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * avTemp * Math.pow(speed, 0.16);

document.getElementById("windchill").innerHTML = f;