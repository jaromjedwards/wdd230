const bannarElement = document.getElementById('bannar-js');

function handleBannarButton(){

    if (bannarElement.className === "bannar"){
        bannarElement.setAttribute("class", "empty-bannar")
    }
    else {
        bannarElement.setAttribute("class", "bannar")
    }
}

function handleCorrectDays(){
    // Create a new Date object
    var currentDate = new Date();

    // Get the day of the week as a number (0-6)
    var dayOfWeekNumber = currentDate.getDay();

    // Define an array of day names
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the day name
    var dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    console.log(dayOfWeekName);

    if (dayOfWeekName !== "Monday" && dayOfWeekName !== "Tuesday" && dayOfWeekName !== "Wednesday"){
        bannarElement.setAttribute("class", "empty-bannar")
    }
}