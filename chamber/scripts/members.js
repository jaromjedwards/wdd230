const url = 'https://raw.githubusercontent.com/jaromjedwards/wdd230/main/chamber/data/members.json';
const cards = document.getElementById('directory-cards-container');

async function getData(url) {
  try {
    const response = await fetch(url);

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    const data = await response.json();

    // Display members if everything is successful
    displayMembers(data.companies);
  } catch (error) {
    // Handle errors, you can log the error or show a user-friendly message
    console.error('Error fetching data:', error.message);
  }
}

const displayMembers = (companies) => {
  // card build code goes here
  companies.forEach((company) => {

      // card
      const sectionElement = document.createElement('section');
      sectionElement.setAttribute('class', 'members')

      // Name
      const companyName = document.createElement('h1');
      companyName.textContent = `${company.name}`;

      // Address
      const companyAddress = document.createElement('p');
      companyAddress.textContent = `Address: ${company.address}`;

      // Phone
      const companyPhone = document.createElement('p');
      companyPhone.textContent = `Phone: ${company.phone}`;

      // URL
      const companyUrl = document.createElement('a');
      companyUrl.href = company.url;
      companyUrl.textContent = 'Website';
      companyUrl.target = '_blank'; // Open link in a new tab

      // Icon
      const companyIcon = document.createElement('img');
      companyIcon.src = company.icon;
      companyIcon.alt = `${company.name} Icon`;
      companyIcon.setAttribute('class', 'icons')

      // Membership
      const companyMembership = document.createElement('p');
      companyMembership.textContent = `Membership: ${company.membership}`;

      // Years
      const companyYears = document.createElement('p');
      companyYears.textContent = `Years: ${company.years}`;

      sectionElement.appendChild(companyName);
      sectionElement.appendChild(companyAddress);
      sectionElement.appendChild(companyPhone);
      sectionElement.appendChild(companyUrl);
      sectionElement.appendChild(companyIcon);
      sectionElement.appendChild(companyMembership);
      sectionElement.appendChild(companyYears);

      // Append the card to the #cards container
      cards.appendChild(sectionElement);

  });
}


getData(url);

