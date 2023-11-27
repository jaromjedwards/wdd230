document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Check if localStorage contains the last visit date
    if(localStorage.getItem("lastVisitDate") === null) {
        // First visit
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Get the last visit date from localStorage
        var lastVisitDate = new Date(localStorage.getItem("lastVisitDate"));

        // Calculate the difference in time between visits
        var timeDifference = currentDate - lastVisitDate;
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if(daysDifference < 1) {
            // Less than a day
            displayMessage("Back so soon! Awesome!");
        } else {
            // More than a day
            var pluralSuffix = (daysDifference === 1) ? "" : "s";
            displayMessage("You last visited " + daysDifference + " day" + pluralSuffix + " ago.");
        }
    }

    // Store the current date in localStorage for the next visit
    localStorage.setItem("lastVisitDate", currentDate);
});

function displayMessage(message) {
    // Display the message in the inner text of the sidebar element
    console.log("Displaying message:", message);
    document.getElementById("welcome-message").innerText = message;
}