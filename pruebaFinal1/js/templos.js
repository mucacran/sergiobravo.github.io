var templo = document.getElementById('temple');
var temploMOstrar = templo.getAttribute('data-templo');

const apiURL = "https://mucacran.github.io/sergiobravo.github.io/pruebaFinal1/js/templos.json";

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); 

        const thetemplos = jsonObject['templos'];

        for (let i = 0; i < thetemplos.length; i++ )
        {
            if(temploMOstrar == 'templo-ecuador-guayaquil')
            {
                templo.innerHTML = '<img src="' + thetemplos[i].imageurl +'">';
                console.log(thetemplos[i].imageurl);
            }
            else if(flase)
            {
                console.log('pilas');
            }
            else if(flase)
            {
                console.log('pilas');
            }
            else{
                console.log('pilas');
            }
        }
    }
    
);