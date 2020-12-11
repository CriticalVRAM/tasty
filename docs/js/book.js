let formIsValid = [false, false, false];

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);

function validationCSSToggle(inputElement, tooltipElement, inputIsValid) {
  if (!inputIsValid) {
    inputElement.classList.add("is-invalid");
    inputElement.classList.remove("is-valid");
    if (tooltipElement.classList.contains("d-none")) tooltipElement.classList.remove("d-none");
  } else {
    inputElement.classList.add("is-valid");
    inputElement.classList.remove("is-invalid");
    if (!tooltipElement.classList.contains("d-none")) tooltipElement.classList.add("d-none");
  }
}

///////////////////////////////////////////////////////////////////////////////
//* If there is value in any of the input on load call valdation functions
$(document).ready(function () {
  //! Call valdation functions if they have any value
  if (fullName.value) validateFullName();
  if (email.value) validateEmail();
  if (phone.value) validatePhone();
});

///////////////////////////////////////////////////////////////////////////////
//* Validation functions for each input
function validateFullName() {
  let fullNameTooltip = document.querySelector("#fullName-invalid");
  let nameRegEx = /^[A-Z]\w* [A-Z]\w*/;
  if (!nameRegEx.test(fullName.value)) {
    validationCSSToggle(fullName, fullNameTooltip, false);
    formIsValid[0] = false;
  } else {
    validationCSSToggle(fullName, fullNameTooltip, true);
    formIsValid[0] = true;
  }
}
function validateEmail() {
  let emailTooltip = document.querySelector("#email-invalid");
  let emailRegEx = /^\S*@.*\.\w*/;
  if (!emailRegEx.test(email.value)) {
    validationCSSToggle(email, emailTooltip, false);
    formIsValid[1] = false;
  } else {
    validationCSSToggle(email, emailTooltip, true);
    formIsValid[1] = true;
  }
}
function validatePhone() {
  let phoneTooltip = document.querySelector("#phone-invalid");
  let phoneRegEx = /^\d{3}[\d -]{5,8}$/;
  if (!phoneRegEx.test(phone.value)) {
    validationCSSToggle(phone, phoneTooltip, false);
    formIsValid[2] = false;
  } else {
    validationCSSToggle(phone, phoneTooltip, true);
    formIsValid[2] = true;
  }
}

///////////////////////////////////////////////////////////////////////////////
//* Check if all inputs are valid when button is clicked
let btn = document.querySelector("#form-button");
let text = document.querySelector("#success-text");
btn.addEventListener("click", validateForm);
function validateForm() {
  if (formIsValid.includes(false)) {
    //! Call valdation functions
    validateFullName();
    validateEmail();
    validatePhone();
    text.classList.add("d-none");
  } else {
    text.classList.remove("d-none");
  }
}
