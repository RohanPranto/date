document.addEventListener("DOMContentLoaded", function () {
    // Get the "No" button element
    var noButton = document.querySelector('.btn-danger');
  
    // Check if the button exists before adding event listeners
    if (noButton) {
      // Add a hover event listener to the "No" button
      noButton.addEventListener('mouseover', function () {
        // Change the position to a random place
        var newX = Math.floor(Math.random() * (window.innerWidth - 100));
        var newY = Math.floor(Math.random() * (window.innerHeight - 40));
  
        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
      });
  
      // Disable the "No" button
      noButton.addEventListener('click', function (event) {
        event.preventDefault();
      });
    }
  });
  