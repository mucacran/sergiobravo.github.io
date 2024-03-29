const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
    


const prophets = jsonObject['prophets'];

for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let fechaNacimientoLugar = document.createElement('p');
    let fechaNacimientoLugar2 = document.createElement('p');
    let image = document.createElement('img');
    let alt = prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order;

    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    
    fechaNacimientoLugar.textContent = 'Date of Birth: ' + prophets[i].birthdate;
    fechaNacimientoLugar2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
    
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', alt);
    
    card.appendChild(h2);
    card.appendChild(fechaNacimientoLugar);
    card.appendChild(fechaNacimientoLugar2);
    card.appendChild(image);

    
    document.querySelector('div.cards').appendChild(card);
    

    //.setAttribute() 

}
});

WebFont.load({
    google: {
        families: [
            'Didact Gothic',
            'Raleway:900&display=swap'
        ]
    }
});

WebFontConfig = {
    events: false
  };