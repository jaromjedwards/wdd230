// document.addEventListener("DOMContentLoaded", function () {
//     // Function to handle form submission
//     document.getElementById("myForm").addEventListener("submit", function (event) {
//         // Get password and confirm password values
//         var password = document.getElementById("password").value;
//         var confirmPassword = document.getElementById("confirmPassword").value;

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             // Prevent form submission
//             event.preventDefault();

//             // Display error message
//             alert("Passwords do not match. Please enter matching passwords.");

//             // Reset password fields
//             document.getElementById("password").value = "";
//             document.getElementById("confirmPassword").value = "";
//         }
//     });

//     // Function to update the password confirmation field on input
//     document.getElementById("confirmPassword").addEventListener("input", function () {
//         var password = document.getElementById("password").value;
//         var confirmPassword = document.getElementById("confirmPassword").value;

//         // Get the elements for styling
//         var passwordField = document.getElementById("password");
//         var confirmPasswordField = document.getElementById("confirmPassword");

//         // Check if passwords match
//         if (password === confirmPassword) {
//             // Remove any previous error styling
//             passwordField.style.border = "1px solid #ccc";
//             confirmPasswordField.style.border = "1px solid #ccc";
//         } else {
//             // Apply error styling
//             passwordField.style.border = "1px solid red";
//             confirmPasswordField.style.border = "1px solid red";
//         }
//     });
// });