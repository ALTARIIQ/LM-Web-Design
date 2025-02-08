/*Handles the submission of the login form.
 Validates input fields, simulates a successful login, and redirects the user to the homepage.*/
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // simple check
    if (email && password) {
        // Simulate successful login
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Please enter both email and password');
    }
});