const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.96&lon=-111.53&appid=0ddfcd67be18cdb7785f736a4e9b004c&units=imperial'; // Added units=imperial

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    // Display temperature in Fahrenheit
    const fahrenheitTemp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${fahrenheitTemp}&deg;F`;

    // Get the weather icon code and construct the icon URL
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Set the src attribute of the weatherIcon element
    weatherIcon.setAttribute('src', iconUrl);
    // Set alt attribute for accessibility
    weatherIcon.setAttribute('alt', data.weather[0].description);

    // Set the weather description
    captionDesc.textContent = data.weather[0].description;
}
