var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
var prestonIdaho = '5604473';
var medidaUnidad = 'imperial';
var city = '';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${prestonIdaho}&appid=${api}&units=${medidaUnidad}`;

var currently   = document.getElementById('currently');
var high        = document.getElementById('high');
var temp        = document.getElementById('temp');
var humidity    = document.getElementById('humidity');
var speed       = document.getElementById('speed');
/******************************/
var wed = document.getElementById('wed');
var thu = document.getElementById('thu');
var fri = document.getElementById('fri');
var sat = document.getElementById('sat');
var sun = document.getElementById('sun');

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.table(jsObject.main);
        humidity.innerHTML = jsObject.main.humidity;
        speed.innerHTML = jsObject.wind.speed;
        high.innerHTML = jsObject.main.temp;
});



function windChill()
{
    var high = parseFloat(high.innerHTML);
    var speed = parseFloat(speed.innerHTML);

    
    askNA(high,speed); 
}


function calculate(high,speed)
{
    // formula
    uno = 35.74 + (0.6215 * high);
    dos = 35.75 * Math.pow(speed,0.16);
    tres = 0.4275 * high * Math.pow(speed,0.16);

    f =  uno - dos + tres;
    temp.innerHTML = parseInt(f);
}

function askNA(high,speed)
{
    if (high > 50 || speed < 3) {
        temp.innerHTML = "N/A";
    }else{
        // formula
        calculate(high,speed);
    }
}