document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.email');
  const contactWrapper = document.querySelector('.contact__wrapper');
  const closeBtn = document.querySelector('.close-btn'); // Select the close button

  btn.addEventListener('click', function () {
    contactWrapper.style.display = 'flex'; // Show the popup
  });

  closeBtn.addEventListener('click', function () {
    contactWrapper.style.display = 'none'; // Hide the popup when close button is clicked
  });

  // Optional: Close the popup by clicking outside the form
  contactWrapper.addEventListener('click', function (e) {
    if (e.target === contactWrapper) {
      // Check if the clicked area is outside the form
      contactWrapper.style.display = 'none';
    }
  });
});



var navToTopBtn = document.getElementById('nav-to-top');

// Listen for scroll events on the window
window.addEventListener('scroll', function () {
  // Check if page is scrolled more than 50 pixels (for example)
  if (window.scrollY > 50) {
    // Show the button
    navToTopBtn.style.display = 'block';
  } else {
    // Hide the button
    navToTopBtn.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.underline');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      navItems.forEach(function(nav) {
        nav.classList.remove('active');
      });

      // Add .active to the clicked item
      item.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let subtitles = document.querySelectorAll(
    '.subtitel-text, .subtitel-text__bottom'
  );
  let index = 0; // To keep track of the current subtitle

  function animateSubtitle() {
    if (index >= subtitles.length) return; // Stop if we've animated all subtitles

    let subtitle = subtitles[index];
    subtitle.classList.add('fade-in');

    // Wait for the fade-in to finish before moving to the next subtitle
    setTimeout(() => {
      index++; // Move to the next subtitle
      animateSubtitle(); // Start the animation for the next subtitle
    }, 1000 + 750); // Wait for 1s animation to finish + 500ms delay before the next
  }

  animateSubtitle(); // Start the animation sequence
});