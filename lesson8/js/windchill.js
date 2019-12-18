/*
The formula to calculate the wind chill factor is LaTeX:
f = 35.74 + 0.6215 t − 35.75 s^0.16 + 0.4275 t s^0.16 ,
f = (35.74 + 0.6215 t) − (35.75 s^0.16) + (0.4275 t s^0.16) ,

where:
f is the wind chill factor in Fahrenheit,
t is the air average temperature in Fahrenheit, and
s is the wind speed in miles per hour.

Input requirements: "Wind Chill Temperature is officially defined for
temperatures at or below 10 °C (50 °F) and
wind speeds above 4.8 kilometres per hour (3.0 mph)."
*/

//IDs
var high = 0;
var speed = 0;
var temp = ''; // este es el span donde se va a imprimir el resultado del calculo

//formula
var uno = 0;
var dos = 0;
var tres = 0;

// resultado
var f = 0;

function windChill()
{
    high = parseFloat(document.getElementById('high').innerHTML);
    speed = parseFloat(document.getElementById('speed').innerHTML);
    temp = document.getElementById('temp');

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

//pagina que me ayudo a verificar mi calculo
//https://www.calculator.net/wind-chill-calculator.html?windspeed=5&windspeedunit=mph&airtemperature=15&airtemperatureunit=fahrenheit&x=89&y=9