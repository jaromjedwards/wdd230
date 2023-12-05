const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const currentTempFive = document.querySelector('#current-temp-five');
const weatherIconFive = document.querySelector('#weather-icon-five');
const captionDescFive = document.querySelector('#figcaption-five');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.96&lon=-111.53&appid=0ddfcd67be18cdb7785f736a4e9b004c&units=imperial'; // Added units=imperial


async function apiFetch() {
    // today
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


function displayResults(data) {
    const fahrenheitTemp = Math.round(data.main.temp);

    var index = 0;
    var hour = 0;
    const fiveDaySectionElement = document.getElementById('weather-card');

    console.log("Length of data.weather:", data.weather.length);


    while (index >= 0 && index <= 5 && hour < data.weather.length) {
        var iconCode = data.weather[hour].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');
        const captionElement = document.createElement('p');

        pElement.innerText = `${fahrenheitTemp}&deg;F`;
        imgElement.setAttribute('src', iconUrl);
        imgElement.setAttribute('alt', data.weather[hour].description);
        captionElement.innerText = data.weather[hour].description;

        fiveDaySectionElement.appendChild(pElement);
        fiveDaySectionElement.appendChild(imgElement);
        fiveDaySectionElement.appendChild(captionElement);

        // Update the hour
        hour += 1;

        // Update the index
        index += 1;
    }
}



apiFetch();


