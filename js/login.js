const emailField = document.getElementById("emailField");

const passwordField = document.getElementById("passwordField");

const loginMessage = document.getElementById('loginInfo');

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', handleLogin)

function handleLogin(e) {
    e.preventDefault();
    let email = emailField.value;
    let password = passwordField.value;

    if (email == 'demo@gmail.com' && password == "1234") {
        window.location.href = "account.html"
    } else {
        loginMessage.style.display = 'block';
    }
}