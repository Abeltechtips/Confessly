// script.js

const uploadPhotoButton = document.querySelector('.upload-photo');
const profilePicture = document.querySelector('.profile-picture img');

uploadPhotoButton.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target.result;
      // Apply styles only after image loads
      profilePicture.style.borderRadius = '50%';
      profilePicture.style.boxShadow = '0px 0px 10px rgba(255, 255, 255, 0.5)';
    };
    reader.readAsDataURL(input.files[0]);
  });

  input.click();
});

// Navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    window.location.href = href;
  });
});

// Assuming you have a link with the ID "confessions-link"
const confessionsLink = document.getElementById('confessions-link');

confessionsLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  window.location.href = 'confessions.html'; // Replace 'confessions.html' with the actual URL
});