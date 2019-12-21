var temploID = document.getElementById('temple');
var temploMOstrar = temploID.getAttribute('data-templo');
var numData = parseInt(temploMOstrar);

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
            if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '">' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

            }
            else if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '">' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

            }
            else if(i == numData)
            {
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '">' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';

            }
            else{
                temploID.innerHTML =    '<img src="' + thetemplos[i].imageurl + '">' + 
                                        '<p> <b>Address</b>: ' + thetemplos[i].address + '</p>' +
                                        '<p> <b>Telephone</b>: ' + thetemplos[i].Telephone + '</p>' +
                                        '<p> <b>Mail</b>: ' + thetemplos[i].CorreoElectrico + '</p>' +
                                        '<p> <b>Services</b>: ' + thetemplos[i].LosServicios + '</p>' +
                                        '<p> <b>History</b>: ' + thetemplos[i].historia + '</p>' +
                                        '<p> <b>Ordinance Schedule</b>: ' + thetemplos[i].calendarioOrdenanza + '</p>' +
                                        '<p> <b>Session Schedule</b>: ' + thetemplos[i].calendarioSecion + '</p>' +
                                        '<p> <b>Temple Closure Schedule</b>: Tuesday ' + thetemplos[i].calendarioSierre[0].Tuesday +
                                        '<br>Tuesday ' + thetemplos[i].calendarioSierre[0].Wednesday + '</p>';
            }
        }
    }
    
);