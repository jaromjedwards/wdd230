function getYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const yearElement = document.getElementById('year');
  if (yearElement !== null) {
    yearElement.innerText = `©${currentYear} Jarom Edwards - Arizona`;
  }
}

function lastModified() {
  let lastModified = new Date(document.lastModified);
  let date = lastModified.toLocaleDateString();
  const lastModifiedElement = document.getElementById('lastModified');
  if (lastModifiedElement !== null) {
    lastModifiedElement.innerText = `Last Modified: ${date}`;
  }
}

function getTime() {
  let currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  if (document.getElementById('current-time') !== null) {
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.innerText = `Form Loaded at ${hours}:${minutes}:${seconds}`;
  }
}

function loadTimes(){
  getYear();
  lastModified();
  getTime();
}