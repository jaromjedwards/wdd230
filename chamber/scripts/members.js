const url = '';
const cards = document.getElementById('cards');

async function getData(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
    //   console.log(data);
        displayMembers(data.companies)
      
    }
  }

const displayMembers = (companies) => {
// card build code goes here
companies.forEach((company) => {

        // card
        const assignment = document.createElement('section');
        assignment.setAttribute('class', 'assignments')

         // Name
        const companyName = document.createElement('h1');

        // Address
        const companyAddress = document.createElement('a');
        companyAddress.textContent = `${company.name}`;
        companyAddress.setAttribute('href', company.address);


        companyName.appendChild(companyAddress);
        assignment.appendChild(companyName);

        // Append the card to the #cards container
        cards.appendChild(assignment);

});
}

getData(url);

