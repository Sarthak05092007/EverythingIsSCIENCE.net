// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission handling (with simple feedback)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Placeholder for form submission (you can integrate with a backend here)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('formResponse').textContent = 'Thank you for contacting us!';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }
  });
  