let password = document.getElementById("pass");
let confirmPassword = document.getElementById("confirm");

const valid1 = document.getElementById("validation");

function validatePass(){
    if (password.value != confirmPassword.value || (password.value === '' && confirmPassword.value === '')) {
        confirmPassword.setCustomValidity ("Error : Passwords don't match. Please try again.");
        password.style.borderColor = "#C13838";
        confirmPassword.style.borderColor = "#C13838";
        valid1.textContent = "*Passwords do not match";
        valid1.classList.add('error');
    } else {
        confirmPassword.setCustomValidity('');
        valid1.textContent = '';
    }
    if (password.value === confirmPassword.value) {
        password.style.borderColor = '#3cd33c';
        confirmPassword.style.borderColor = '#3cd33c';
    }
}

password.onchange = validatePass;
confirmPassword.onkeyup = validatePass;

window.onload = redPass;

function redPass() {
    password.style.borderColor = "#C13839";
    confirmPassword.style.borderColor = "#C13838";
    valid1.textContent = "*Passwords do not match";
    valid1.classList.add('error');
}