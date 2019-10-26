/*
The formula to calculate the wind chill factor is LaTeX:
f = 35.74 + 0.6215 t − 35.75 s^0.16 + 0.4275 t s^0.16 ,

where:
f is the wind chill factor in Fahrenheit,
t is the air average temperature in Fahrenheit, and
s is the wind speed in miles per hour.

Input requirements: "Wind Chill Temperature is officially defined for
temperatures at or below 10 °C (50 °F) and
wind speeds above 4.8 kilometres per hour (3.0 mph)."
*/


function windChill()
{
    var high = parseFloat(document.getElementById('high').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);
    var temp = document.getElementById('temp');

    temp.innerHTML = high + ' - ' + speed;

    //console.log(high + ' - ' + speed);
}
