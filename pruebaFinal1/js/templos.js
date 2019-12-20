var templo = document.getElementById('templeGuayaquil');

const apiURL = `https://raw.githubusercontent.com/mucacran/sergiobravo.github.io/master/pruebaFinal1/js/templos.json`;

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 

        //const prophets = jsonObject['templos'];
    }
    
);