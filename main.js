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
