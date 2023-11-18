document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage contains the last visit date
    let lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate) {
        // Calculate the days between visits
        let currentDate = new Date();
        let daysBetween = Math.floor((currentDate - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));

        // Display an appropriate message based on the number of days between visits
        let message;
        if (daysBetween === 0) {
            message = "Welcome back! You visited today.";
        } else if (daysBetween === 1) {
            message = "Welcome back! You visited yesterday.";
        } else {
            message = "Welcome back! It's been " + daysBetween + " days since your last visit.";
        }

        // Update the page with the message
        alert(message);
    }

    // Save the current date in localStorage for the next visit
    localStorage.setItem("lastVisitDate", new Date().toDateString());

    // Lazy load images when they come into view
    let images = document.querySelectorAll(".main-content img");
    images.forEach(function(img) {
        img.addEventListener("load", function() {
            // Add a class to indicate the image has loaded
            img.classList.add("loaded");
        });

        // Check if the image is in the viewport when the page loads
        if (isElementInViewport(img)) {
            img.src = img.getAttribute("data-src");
        }

        // Add a scroll event listener to load images as the user scrolls
        window.addEventListener("scroll", function() {
            if (isElementInViewport(img) && !img.classList.contains("loaded")) {
                img.src = img.getAttribute("data-src");
            }
        });
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
