var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
/******* Segun la ciudad******/
//var prestonIdaho = '5604473';
let tableWeatherSummary = document.getElementById('table-weather-summary');
let dataWeather = tableWeatherSummary.getAttribute('data-weather');
/******** */
var medidaUnidad = 'imperial';
var typoShow = ['weather', 'forecast'];
var city = '';
const apiURL = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${dataWeather}&appid=${api}&units=${medidaUnidad}`;
/***********************************/
var currently = document.getElementById('currently');
var high = document.getElementById('high');
var temp = document.getElementById('temp');
var humidity = document.getElementById('humidity');
var speed = document.getElementById('speed');
/******************************/
var dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var temNum = ['wed', 'thu', 'fri', 'sat', 'sun']; // registra la temperatura de los ultimos 5 dias
var imgClima = ['wedImg', 'thuImg', 'friImg', 'satImg', 'sunImg']; // registra la imagen de los ultimos 5 dias
var dayFive = ['dayWed', 'dayThu', 'dayFri', 'daySat', 'daySun'];
/**************************/
var temperaturaHight = 0;
var viento = 0;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        humidity.innerHTML = jsObject.main.humidity;
        speed.innerHTML = jsObject.wind.speed.toFixed(0);
        high.innerHTML = jsObject.main.temp.toFixed(0);
        currently.innerHTML = jsObject.weather[0].main;
        windChill(parseFloat(high.innerHTML), parseFloat(speed.innerHTML));
    });
/************************************************************************* */
windChill();
function windChill(high, speed) {
    temperaturaHight = high;
    viento = speed;
    //console.log(high + ' - ' + speed);
    askNA(temperaturaHight, viento);
}

function calculate(high, speed) {
    // formula
    uno = 35.74 + (0.6215 * high);
    dos = 35.75 * Math.pow(speed, 0.16);
    tres = 0.4275 * high * Math.pow(speed, 0.16);

    f = uno - dos + tres;
    temp.innerHTML = parseInt(f) + '°F';
}

function askNA(high, speed) {
    if (high > 50 || speed < 3) {
        temp.innerHTML = "N/A";
    } else {
        // formula
        calculate(high, speed);
    }
}
//https://www.calculator.net/wind-chill-calculator.html?windspeed=9.17&windspeedunit=mph&airtemperature=35.67&airtemperatureunit=fahrenheit&x=78&y=21
/******************************************************************************************************************************/
const climatizate = `https://api.openweathermap.org/data/2.5/${typoShow[1]}?id=${dataWeather}&appid=${api}&units=${medidaUnidad}`;
fetch(climatizate)
    .then((responde) => responde.json())
    .then((objClimatizate) => {
        var imagen = ['', '', '', '', ''];
        var num = 0;
        for (var i = 0; i < objClimatizate.list.length; i++) {
            if (objClimatizate.list[i].dt_txt.includes('18:00:00')) {
                var fecha = new Date(objClimatizate.list[i].dt * 1000);
                imagen[num] = '<img class="semanaTemperatura" src="https://openweathermap.org/img/w/' + objClimatizate.list[i].weather[0].icon + '.png" alt="' + objClimatizate.list[i].weather[0].description + '">';
                document.getElementById(imgClima[num]).innerHTML = imagen[num];
                document.getElementById(temNum[num]).innerHTML = objClimatizate.list[i].main.temp.toFixed(0) + '°F';
                document.getElementById(dayFive[num]).innerHTML = dias[fecha.getDay()];
                num++;
            }
        }
    });

const eventos = 'https://byui-cit230.github.io/weather/data/towndata.json';
    let evemtoId = document.getElementById('evento');
    let atributoData = evemtoId.getAttribute('data-city');
    let imgCity = document.getElementById('imgCity');
     
    fetch(eventos)
        .then((reseventosjs) => reseventosjs.json())
        .then((eventosjs) => {
            var eventosVar = eventosjs['towns'];
            for(var i = 0;i < eventosVar.length; i++)
            {
                if(eventosVar[i].name == atributoData)
                {
                    for(var j = 0;j < eventosVar[i].events.length; j++)
                    {
                        imgCity.setAttribute('src', 'img/' + eventosVar[i].photo);
                        imgCity.setAttribute('alt', eventosVar[i].motto);
                        var arrayEventoLinea = eventosVar[i].events[j].split(':');
                        evemtoId.innerHTML += '<b>' + arrayEventoLinea[0] + ': </b>' + arrayEventoLinea[1] + "<br>";
                    }
                }
            }
        });
