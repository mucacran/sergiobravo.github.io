var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
var prestonIdaho = '5604473';
var medidaUnidad = 'imperial';
var city = '';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${prestonIdaho}&appid=${api}&units=${medidaUnidad}`;
/***********************************/
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
/**************************/
var temperaturaHight = 0;
var viento = 0;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(apiURL);
        humidity.innerHTML = jsObject.main.humidity;
        speed.innerHTML = jsObject.wind.speed;
        high.innerHTML = jsObject.main.temp;
        currently.innerHTML = jsObject.weather[0].main;
        windChill(parseFloat(high.innerHTML),parseFloat(speed.innerHTML));  
});

windChill();
function windChill(high,speed)
{
    temperaturaHight = high;
    viento = speed;
    //console.log(high + ' - ' + speed);
    askNA(temperaturaHight,viento); 
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
//https://www.calculator.net/wind-chill-calculator.html?windspeed=9.17&windspeedunit=mph&airtemperature=35.67&airtemperatureunit=fahrenheit&x=78&y=21