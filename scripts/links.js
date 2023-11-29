const url2 = 'https://raw.githubusercontent.com/jaromjedwards/wdd230/main/data/links.json';
const cards = document.getElementById('cards');

async function getData(url2) {
    const response = await fetch(url2);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
    //   console.log(data);
        displayWeeks(data.weeks)
      
    }
  }

const displayWeeks = (weeks) => {
// card build code goes here
weeks.forEach((week) => {

        // card
        const card = document.createElement('section');
        card.setAttribute('class', 'card')

        // URL
        const weekURL = document.createElement('p');
        weekURL.textContent = `URL: ${week.url}`;
        weekURL.setAttribute('class', 'week-url');

        // Title
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = `Title: ${week.title}`;
        weekTitle.setAttribute('class', 'week-title');

        card.appendChild(weekURL);
        card.appendChild(weekTitle);


        // Append the card to the #cards container
        cards.appendChild(card);

});
}

getData(url2);

