var server = 'api.openweathermap.org';
var api = '5cd682059cff3541db92f27dcde7121d';
var prestonIdaho = '5604473';
var medidaUnidad = 'imperial';
var city = '';
var typoShow = ['weather','forecast']
const apiURL = `https://api.openweathermap.org/data/2.5/${typoShow[0]}?id=${prestonIdaho}&units=${medidaUnidad}&APPID=${api}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    /****************************************/
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  console.log(apiURL);
  
  