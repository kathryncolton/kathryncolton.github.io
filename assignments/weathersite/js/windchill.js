var h = parseFloat(document.getElementById("high").innerHTML);
var l = parseFloat(document.getElementById("low").innerHTML);
var s = parseFloat(document.getElementById("speed").innerHTML);


var avTemp = (h + l) / 2;

var f = 35.74 + 0.6215 * avTemp - 35.75 * Math.pow(s, 0.16) + 0.4275 * avTemp * Math.pow(s, 0.16);

f = Math.round(f * 10) / 10.0;

document.getElementById("windchill").innerHTML = f;