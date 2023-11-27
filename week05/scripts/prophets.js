const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
    //   console.log(data);
        displayProphets(data.prophets)
      
    }
  }

const displayProphets = (prophets) => {
// card build code goes here
prophets.forEach((prophet) => {

        // card
        const card = document.createElement('section');
        card.setAttribute('class', 'card')

        // name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        fullName.setAttribute('class', 'prophet-name')

        // place of birth
        const birthPlace = document.createElement('h3');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        birthPlace.setAttribute('class', 'birth-place');

        // date of birth
        const birthDate = document.createElement('h3');
        birthDate.textContent = `Date of Birth ${prophet.birthdate}`;
        birthDate.setAttribute('class', 'birth-date');

        // image
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl); // Replace with the actual property in your data
        portrait.setAttribute('alt', `${prophet.firstName} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy'); // Optional: Use 'lazy' for lazy loading
        portrait.setAttribute('width', '300'); // Replace with the actual width
        portrait.setAttribute('height', '400'); // Replace with the actual height

    card.appendChild(fullName);

    card.appendChild(birthDate);

    card.appendChild(birthPlace);

    // Append the image to the card
    card.appendChild(portrait);

    // Append the card to the #cards container
    cards.appendChild(card);



});
}

getProphetData(url);

