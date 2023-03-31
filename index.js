function sendEmail() {
    // Get the form element
const form = document.querySelector('#contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data as an object
  const formData = new FormData(form);

  // Send the form data to the server
  fetch('https://example.com/send-email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Show a success message
    alert('Your message has been sent!');
    // Clear the form
    form.reset();
  })
  .catch(error => {
    // Show an error message
    alert('There was an error sending your message. Please try again later.');
  });
});
}
