document.addEventListener("DOMContentLoaded", function () {
    // Get the "No" and "Yes" button elements
    var noButton = document.querySelector('.btn-danger');
    var yesButton = document.querySelector('.btn-success');
    var line = document.querySelector('.ques');
    var image = document.querySelector('img');
    var musicButton = document.getElementById('musicButton');
    var audio = new Audio('Chipi.mp3');
    audio.play();
    
    // Check if the buttons and image exist before adding event listeners
    if (noButton && yesButton && image && musicButton) {
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
  
      // Add a click event listener to the "Yes" button
      yesButton.addEventListener('click', function () {
        // Remove the "Yes" button
        yesButton.remove();
        line.textContent = 'Dil garden garden ho gaya UwU';
  
        // Create a new button "Fix a date"
        var fixDateButton = document.createElement('button');
        fixDateButton.className = 'btn btn-primary btn-fix';
        fixDateButton.textContent = 'Fix a date';
  
        fixDateButton.addEventListener('click', function () {
          // Redirect to "fix_a_date.html"
          window.location.href = 'fix_a_date.html';
        });
  
        // Append the new button to the container
        var container = document.querySelector('.container');
        container.appendChild(fixDateButton);
  
        // Change the image source
        image.src = 'https://media1.tenor.com/images/d17fac960ce33e3877b00f0e4f5441e2/tenor.gif?itemid=17400523';
        audio.src = 'Garden.mp3';
        audio.play();
        // Remove the "No" button
        noButton.remove();
      });
  
      // Add a click event listener to the "Music" button
      musicButton.addEventListener('click', function () {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });
  
      // Start playing the music automatically
      audio.play();
    }
  });
  
