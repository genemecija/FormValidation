const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const emailConfirm = document.getElementById('emailConfirm');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const error = document.querySelector('.error');


const inputs = [email, emailConfirm, country, zip, password, passwordConfirm]

// Iterate through input fields
inputs.forEach(input => {
    // Get respective error span element
    const error = document.querySelector(`.error#${input.id}`);

    // On focusOut, validate input
    input.addEventListener("focusout", () => {
        // Make input required
        input.required = true

        if (!input.validity.valid) {
            error.classList.add('active')

            if (input.validity.patternMismatch) {
                if (input == emailConfirm) {
                    error.innerHTML = "Emails do not match."
                } else if (input == passwordConfirm) {
                    error.innerHTML = "Passwords do not match"
                } else if (input == password) {
                    error.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
                } else {
                    error.innerHTML = "Invalid input."
                }
            } else if (input.validity.rangeOverflow) {
                error.innerHTML = "Range overflow."
            } else if (input.validity.rangeUnderflow) {
                error.innerHTML = "Range underflow."
            } else if (input.validity.typeMismatch) {
                error.classList.add('active')
                error.innerHTML = "This is not a valid input."
            } else if (input.validity.valueMissing) {
                error.innerHTML = "This field is required."
            }
        }
        
    })

    // On input receipt, clear error if valid and update pattern requirements on confirmation inputs
    input.addEventListener("input", function (event) {
        if (input.validity.valid) {
            error.innerText = ""
            error.className = "error"
        }
        if (input == emailConfirm) {
            emailConfirm.setAttribute('pattern', `${email.value}`)
        }
        if (input == passwordConfirm) {
            passwordConfirm.setAttribute('pattern', `${password.value}`)
        }
    }, false)
})

// On form submission, validate all input fields
form.addEventListener("submit", function (event) {
    inputs.forEach(input => {
        // Get respective error span element
        const error = document.querySelector(`.error#${input.id}`);
        // Make input required
        input.required = true

        if (!input.validity.valid) {
            error.classList.add('active')
    
            if (input.validity.patternMismatch) {
                if (input == emailConfirm) {
                    error.innerHTML = "Emails do not match."
                } else if (input == passwordConfirm) {
                    error.innerHTML = "Passwords do not match"
                } else if (input == password) {
                    error.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
                } else {
                    error.innerHTML = "Invalid input."
                }
            } else if (input.validity.rangeOverflow) {
                error.innerHTML = "Range overflow."
            } else if (input.validity.rangeUnderflow) {
                error.innerHTML = "Range underflow."
            } else if (input.validity.valueMissing) {
                error.innerHTML = "This field is required."
            } else if (input.validity.typeMismatch) {
                error.classList.add('active')
                error.innerHTML = "This is not a valid input."
            }
            event.preventDefault();
        }
    })
}, false);