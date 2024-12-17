// Add an event listener for the form submission
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Thank you for your feedback! It has been recorded."); // Show confirmation popup
    // Optionally, reset the form after submission
    this.reset();
});
