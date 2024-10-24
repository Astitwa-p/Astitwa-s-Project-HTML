document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate form submission
    document.getElementById('message').textContent = `Welcome to Musikalis, ${username}!`;
    
    // Clear the form fields
    document.getElementById('signup-form').reset();
});
