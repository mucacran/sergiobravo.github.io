function GetCurrentYear()
{
    var date = new Date();
    var currentYear = date.getFullYear();

    document.getElementById("copyrightdate").innerHTML = currentYear;
}

function GetModifiedDate()
{
    var modifiedDate = document.lastModified;

    document.getElementById("datemodified").innerHTML = modifiedDate;
}


function printMeses()
{
    var monthName = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var daysName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    var fecha = new Date();

    var fechaPrint = 'Last updated: ' + daysName[fecha.getDay()] + ', ' + fecha.getDate() + ' ' + monthName[fecha.getMonth()] + ' ' + fecha.getFullYear();
    var divFecha = document.getElementById('fecha');
    divFecha.innerHTML = fechaPrint;
}

function UpdateDates()
{
    GetCurrentYear();
    // GetModifiedDate();
    printMeses();
}

