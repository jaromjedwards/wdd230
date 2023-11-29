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
        const assignment = document.createElement('section');
        assignment.setAttribute('class', 'assignments')

         // Title
        const weekTitle = document.createElement('h1');

        // URL
        const weekURL = document.createElement('a');
        weekURL.textContent = `${week.links[0].title}`;
        weekURL.setAttribute('href', week.links[0].url);


        weekTitle.appendChild(weekURL);
        assignment.appendChild(weekTitle);

        // Append the card to the #cards container
        cards.appendChild(assignment);

});
}

getData(url2);

