const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
    


    const ciudades = jsonObject['towns'];
    var contenido = '';
    for(var i = 0; i < 3; i++)
    {
        contenido += '<section><div><h2>' + ciudades[i].name +
        '</h2><span>' + ciudades[i].motto +
        '</span><p>Year Found: '+ ciudades[i].yearFounded + 
        '<br>Population: ' + ciudades[i].currentPopulation +
        '<br>averageRainfall: ' + ciudades[i].averageRainfall +
        '</p></div><img src="img/' + ciudades[i].photo + '" alt ="iamgen of ' + ciudades[i].name + '" >' +
        '</section>';
    }
    document.getElementById('cards').innerHTML =  contenido;
});
