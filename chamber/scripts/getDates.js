window.onload = function() {
    console.log('Page is loaded');
    // call functions
    getYear();
    lastModified();
    getTime();
  };
  
  
function getYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const yearElement = document.getElementById('year');
  yearElement.innerText = `©${currentYear} Jarom Edwards - Arizona`;
}

function lastModified(){
  let lastModified = new Date(document.lastModified);
  let date = lastModified.toLocaleDateString();
  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.innerText = `Last Modified: ${date}`;
}

function getTime(){
  let currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  const currentTimeElement = document.getElementById('current-time');
  currentTimeElement.innerText = `Form Loaded at ${hours}:${minutes}:${seconds}`;

}