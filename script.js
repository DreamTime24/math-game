function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        window.location.href = "game.html";  // Redirect to Game Page
    } else {
        document.getElementById('error-msg').innerText = "Invalid username or password!";
    }
}
