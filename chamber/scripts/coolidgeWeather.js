// Coolidge AZ / 5 days every 3 hours / Imperial
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.96&lon=-111.53&appid=9e9a345cc785c3c3d52dcdab0577abf6&units=imperial';

// fetch url data
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

// display url data
function displayResults(data) {

    // parent element
    const threeDaySectionElement = document.getElementById('weather-card');

    // declare index
    index = 0


    // create child elements 3 times
    while (index >= 0 && index <= 16){
        console.log(data.list[index].dt_txt);

        const f = document.createElement('div');

        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');
        const captionElement = document.createElement('p');

        pElement.innerText = data.list[index].main.temp

        icon = "https://openweathermap.org/img/w/" + data.list[index].weather[0].icon + ".png"
        imgElement.setAttribute('src', icon);

        captionElement.innerText = data.list[index].weather[0].description

        f.appendChild(pElement);
        f.appendChild(imgElement);
        f.appendChild(captionElement);

        threeDaySectionElement.appendChild(f);

        index += 8
    }
}

apiFetch();


