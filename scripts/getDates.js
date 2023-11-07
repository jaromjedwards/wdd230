window.onload = function() {
    console.log('Page is loaded');
    getYear();
  };
  
  
  function getYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    const yearElement = document.getElementById('year');
    yearElement.innerText = currentYear;
  }
  