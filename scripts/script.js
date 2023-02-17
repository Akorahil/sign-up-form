const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

const phoneNumber = document.getElementById('phone-number');
const phoneError = document.querySelector("#phone-number + div.data-error");

const email = document.getElementById('email');
const emailError = document.querySelector("#email + div.data-error");

const password = document.getElementById('password');
const passwordError = document.querySelector("#password + div.data-error");

const confirmPass = document.getElementById('confirm-password');
const passwordConfirmError = document.querySelector("#confirm-password + div.data-error");

/* Regex format: /^ <regex input> /  */
const emailRegEx = /[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}[\.][a-zA-Z0-9]{1,}$/im;
const phoneRegEx = /[\(]?[0-9]{3}[\)]?[-\.\s]?[0-9]{3}[-\.\s]?[0-9]{4}$/im;
const passwordRegEx = /[a-zA-Z0-9]{5,15}$/im;

signUpForm.addEventListener('submit', (event) => {
    let validate = true;

    phoneError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    passwordConfirmError.textContent="";

    const emailValidation = validateEmail();
    const phoneValidation = validatePhoneNumber();
    const passwordValidation = validatePassword();

    validate = emailValidation && 
               phoneValidation &&
               passwordValidation;

    /* If any of the tests fails prevent submission */
    if(!validate)  {
        event.preventDefault();
    }
})

function validatePhoneNumber() {
    const isValid = phoneRegEx.test(phoneNumber.value);
    if(!isValid) {
        phoneError.textContent="Must enter a valid phone number";
        return false;
    }
    return true;
}

function validateEmail() {
    const isValid = emailRegEx.test(email.value);
    if(!isValid) {
        emailError.textContent="Must enter a valid email address";
        return false;
    }
    return true;
}

function validatePassword() {
    let passwordValue = password.value;
    let confirmValue = confirmPass.value;
    const isValid = passwordRegEx.test(password.value);

    let returnValue = true;
    if(!isValid) {
        passwordError.textContent="Must enter valid password between 5-15 characters";
        returnValue = false;        
    }
    if(passwordValue != confirmValue) {
        passwordConfirmError.textContent="Passwords must match exactly";
        returnValue = false;
    }

    return returnValue;
};