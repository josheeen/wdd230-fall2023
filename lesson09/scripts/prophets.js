const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
    const cards = document.querySelector('#cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let death = document.createElement('p');
        let length = document.createElement('p');
        let order = document.createElement('p');
        let birthplace = document.createElement('p');
        let numofchildren = document.createElement('p');


        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl)
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // console.log(prophet)
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        numofchildren.textContent = `Children: ${prophet.numofchildren}`;
        length.textContent = `Prophet Years: ${prophet.length}`;
        order.textContent = `Propeht Order: ${prophet.order}`;
        death.textContent = `Date of Death: ${prophet.death}`;

        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(birthplace);


        cards.appendChild(card);
    }) //close of for each loop
}