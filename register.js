document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation or any other operations
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
});
