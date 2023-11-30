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
        const sectionElement = document.createElement('section');
        sectionElement.setAttribute('class', 'assignments')

         // Title
        const weekTitle = document.createElement('h1');
        weekTitle.textContent = `${week.week}: `;

        // URL
        week.links.forEach((link) => {
          const linkElement = document.createElement('a');
          linkElement.textContent = `${link.title} / `;
          linkElement.setAttribute('href', link.url);
    
          // Append link elements to the assignment card
          weekTitle.appendChild(linkElement);
        });


        // weekTitle.appendChild(weekURL);
        sectionElement.appendChild(weekTitle);

        // Append the card to the #cards container
        cards.appendChild(sectionElement);

  });
}

getData(url2);

