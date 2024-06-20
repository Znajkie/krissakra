document.addEventListener('DOMContentLoaded', function () {
  const emailBtn = document.querySelector('.email');
  const bookingBtn = document.querySelector('.bookingBtn');
  const footerContactLink = document.querySelector('.footer-contact-link');
  const contactWrapper = document.querySelector('.contact__wrapper');
  const closeBtn = document.querySelector('.close-btn'); // Select the close button

  // Function to show the contact form
  function showContactForm() {
    contactWrapper.style.display = 'flex'; // Show the popup
  }

  // Function to hide the contact form
  function hideContactForm() {
    contactWrapper.style.display = 'none'; // Hide the popup when close button is clicked
  }

  // Add click event listener to email button
  emailBtn.addEventListener('click', showContactForm);

  bookingBtn.addEventListener('click', showContactForm);

  // Add click event listener to footer contact link
  footerContactLink.addEventListener('click', showContactForm);

  // Add click event listener to close button
  closeBtn.addEventListener('click', hideContactForm);

  // Optional: Close the popup by clicking outside the form
  contactWrapper.addEventListener('click', function (e) {
    if (e.target === contactWrapper) {
      // Check if the clicked area is outside the form
      hideContactForm();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const bookingBtn = document.querySelector('.bookingBtn');
  const contactWrapper = document.querySelector('.contact__wrapper');
  const closeBtn = document.querySelector('.close-btn'); // Select the close button

  // Function to show the contact form
  function showContactForm() {
    contactWrapper.style.display = 'flex'; // Show the popup
  }

  // Function to hide the contact form
  function hideContactForm() {
    contactWrapper.style.display = 'none'; // Hide the popup when close button is clicked
  }

  // Add click event listener to email button

  bookingBtn.addEventListener('click', showContactForm);


  // Add click event listener to close button
  closeBtn.addEventListener('click', hideContactForm);

  // Optional: Close the popup by clicking outside the form
  contactWrapper.addEventListener('click', function (e) {
    if (e.target === contactWrapper) {
      // Check if the clicked area is outside the form
      hideContactForm();
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

document.addEventListener('DOMContentLoaded', function () {
  var navItems = document.querySelectorAll('.underline');

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      navItems.forEach(function (nav) {
        nav.classList.remove('active');
      });

      // Add .active to the clicked item
      item.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let titles = document.querySelectorAll(
    '.title-text, .title-text__bottom'
  );
  let index = 0; // To keep track of the current title

  function animateTitle() {
    if (index >= titles.length) return; // Stop if we've animated all titles

    let title = titles[index];
    title.classList.add('fade-in');

    // Wait for the fade-in to finish before moving to the next title
    setTimeout(() => {
      index++; // Move to the next title
      animateTitle(); // Start the animation for the next title
    }, 1000 + 750); // Wait for 1s animation to finish + 500ms delay before the next
  }

  animateTitle(); // Start the animation sequence
});


