const baseURL = "https://jaromjedwards.github.io/wdd230/"
const linksURL = "https://jaromjedwards.github.io/wdd230/data/links.json"

async function getData(){

    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getData();