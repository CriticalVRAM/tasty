let formIsValid = false;

let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

$(document).ready(function () {
  if (fullName.value) validateFullName();
});

fullName.addEventListener("blur", validateFullName);

function validateFullName() {
  let fullNameTooltip = document.querySelector("#fullName-invalid");
  let nameRegEx = /^[A-Z]\w* [A-Z]\w*/;
  if (!nameRegEx.test(fullName.value)) {
    validationTooltipToggle(fullName, fullNameTooltip, false);
    formIsValid = false;
  } else {
    validationTooltipToggle(fullName, fullNameTooltip, true);
    formIsValid = true;
  }
}

function validationTooltipToggle(inputElement, tooltipElement, inputIsValid) {
  if (!inputIsValid) {
    inputElement.classList.add("is-invalid");
    inputElement.classList.remove("is-valid");
    if (tooltipElement.classList.contains("d-none")) tooltipElement.classList.remove("d-none");
  } else {
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    if (!tooltipElement.classList.contains("d-none")) tooltipElement.classList.add("d-none");
  }
}

// name email phone
// select input
// add eventlistenter blur with anonimus function that that checks the value
// check with a regex
// if it's invalid toggle tooltip and toggle is-invalid
// else toggle is-valid

// have a "is valid" variable
// when the button is clicked check if "is valid"
// if yes show text
// if no run invalid style functions

let btn = document.querySelector("#form-button");
let text = document.querySelector("#success-text");
btn.addEventListener("click", validateForm);
function validateForm() {
  if (!formIsValid) {
    validateFullName();
    text.classList.add("d-none");
  } else {
    text.classList.remove("d-none");
  }
}
