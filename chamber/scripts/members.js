const membersUrl = 'https://raw.githubusercontent.com/jaromjedwards/wdd230/main/chamber/data/members.json';

async function getData(membersUrl) {
  try {
    const response = await fetch(membersUrl);

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    const data = await response.json();

    // Display all members on the directory page
    if (document.body.id === 'directory'){
      displayMembers(data.companies);
    }
    // Display 3 random members on the home page with Gold or Silver memberships
    if (document.body.id === 'home-page'){
      displayThreeRandomMembers(data.companies);
    }

  } catch (error) {
    // Handle errors, you can log the error or show a user-friendly message
    console.error('Error fetching data:', error.message);
  }
}

// displays the members it is given, eiher the 3 random or all the members
const displayMembers = (companies) => {

  const cards = document.getElementById('directory-cards-container');

  companies.forEach((company) => {

      // card
      const sectionElement = document.createElement('section');
      sectionElement.setAttribute('class', 'members')
      sectionElement.setAttribute('id', 'members')

      // Name
      const companyName = document.createElement('h1');
      companyName.textContent = `${company.name}`;

      // Address
      const companyAddress = document.createElement('p');
      companyAddress.textContent = `Address: ${company.address}`;

      // Phone
      const companyPhone = document.createElement('p');
      companyPhone.textContent = `Phone: ${company.phone}`;

      // membersUrl
      const companymembersUrl = document.createElement('a');
      companymembersUrl.href = company.membersUrl;
      companymembersUrl.textContent = 'Website';
      companymembersUrl.target = '_blank'; // Open link in a new tab

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
      sectionElement.appendChild(companymembersUrl);
      sectionElement.appendChild(companyIcon);
      sectionElement.appendChild(companyMembership);
      sectionElement.appendChild(companyYears);

      // Append the card to the #cards container
      cards.appendChild(sectionElement);

  });
}

// this function randomly selects 3 members with Gold or Silver memberships, then calls displayMembers
const displayThreeRandomMembers = (companies) => {
  
  // create list of gold and silver members
  const goldMembers = [];
  companies.forEach((company) => {
    
    if (company.membership === "Gold" || company.membership === "Silver"){

      goldMembers.push(company);

    }

  });

  // split the list into 3 random members
  const numberOfItemsToChoose = 3;
  const randomItems = getRandomItems(goldMembers, numberOfItemsToChoose);
  console.log("Randomly chosen items:", randomItems);
  console.log(randomItems[0]);

  // display the 3 random members
  displayMembers(randomItems);
  
};

// returns random items from a list
function getRandomItems(arr, numItems) {
  // Check if the array has enough items
  if (arr.length < numItems) {
    console.error("Array does not have enough items");
    return null;
  }

  // Shuffle the array
  const shuffledArray = arr.sort(() => Math.random() - 0.5);

  // Get the first 'numItems' elements
  const randomItems = shuffledArray.slice(0, numItems);

  return randomItems;
}



getData(membersUrl);

