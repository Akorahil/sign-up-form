const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

const phoneNumber = document.getElementById('phone-number');
const phoneError = document.querySelector("#phone-number + div.data-error");

const email = document.getElementById('email');
const emailError = document.querySelector("#email + div.data-error");

const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');
const passwordError = document.querySelector("#confirm-password + div.data-error");


signUpForm.addEventListener('submit', (event) => {
    let validate = true;

    validate = validatePhoneNumber();
    validate = validateEmail();
    validate = validatePassword();

    /* If any of the tests fails prevent submission */
    if(!validate)  {
        event.preventDefault();
    }
})

function validatePhoneNumber() {

}

function validateEmail() {

}

function validatePassword() {
    let passwordValue = password.value;
    let confirmValue = confirmPass.value;

    if(passwordValue != confirmValue) {
        passwordError.textContent="Passwords must match exactly";
        return false;
    }

    return true;
};