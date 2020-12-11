//* Declare variables and eventListeners
let formIsValid = [false, false, false, false, false, false, false];

// cilent info
let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
fullName.addEventListener("blur", validateFullName);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
// reservation date
let date = document.querySelector("#date");
let time = document.querySelector("#time");
date.addEventListener("blur", validateDate);
time.addEventListener("blur", validateTime);
// reservation info
let table = document.querySelector("#table");
table.addEventListener("blur", validateTable);
table.addEventListener("change", validateTable);
let people = document.querySelector("#people");
people.addEventListener("blur", validatePeople);

///////////////////////////////////////////////////////////////////////////////
//* Generate dropdown dynamically from data and declare the CSS function
let tabelTypesData = ["Indoor", "Garden", "Rooftop"];
tabelTypesData.forEach((tableType) => {
  let newOption = document.createElement("option");
  newOption.setAttribute("value", tableType);
  newOption.textContent = tableType;
  table.appendChild(newOption);
});

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
  if (date.value) validateDate();
  if (time.value) validateTime();
  if (people.value) validatePeople();
});

///////////////////////////////////////////////////////////////////////////////
//* Validation functions for each input
function validateFullName() {
  let fullNameTooltip = document.querySelector("#fullName-invalid");
  if (!/^[A-Z]\w* [A-Z]\w*/.test(fullName.value)) {
    validationCSSToggle(fullName, fullNameTooltip, false);
    formIsValid[0] = false;
  } else {
    validationCSSToggle(fullName, fullNameTooltip, true);
    formIsValid[0] = true;
  }
}
function validateEmail() {
  let emailTooltip = document.querySelector("#email-invalid");
  if (!/^\S*@.*\.\w*/.test(email.value)) {
    validationCSSToggle(email, emailTooltip, false);
    formIsValid[1] = false;
  } else {
    validationCSSToggle(email, emailTooltip, true);
    formIsValid[1] = true;
  }
}
function validatePhone() {
  let phoneTooltip = document.querySelector("#phone-invalid");
  if (!/^\d{3}[\d -]{5,8}$/.test(phone.value)) {
    validationCSSToggle(phone, phoneTooltip, false);
    formIsValid[2] = false;
  } else {
    validationCSSToggle(phone, phoneTooltip, true);
    formIsValid[2] = true;
  }
}
function validateDate() {
  let dateTooltip = document.querySelector("#date-invalid");
  if (!/^\d{2}-\d{2}-\d{4}$/.test(date.value)) {
    validationCSSToggle(date, dateTooltip, false);
    formIsValid[3] = false;
  } else {
    validationCSSToggle(date, dateTooltip, true);
    formIsValid[3] = true;
  }
}
function validateTime() {
  let timeTooltip = document.querySelector("#time-invalid");
  if (!/^\d{2}:\d{2}$/.test(time.value)) {
    validationCSSToggle(time, timeTooltip, false);
    formIsValid[4] = false;
  } else {
    validationCSSToggle(time, timeTooltip, true);
    formIsValid[4] = true;
  }
}
function validateTable() {
  let tableTooltip = document.querySelector("#table-invalid");
  if (table.selectedIndex === 0) {
    validationCSSToggle(table, tableTooltip, false);
    formIsValid[5] = false;
  } else {
    validationCSSToggle(table, tableTooltip, true);
    formIsValid[5] = true;
  }
}
function validatePeople() {
  let peopleTooltip = document.querySelector("#people-invalid");
  if (people.value < 2 || people.value > 12) {
    validationCSSToggle(people, peopleTooltip, false);
    formIsValid[6] = false;
  } else {
    validationCSSToggle(people, peopleTooltip, true);
    formIsValid[6] = true;
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
    validateDate();
    validateTime();
    validateTable();
    validatePeople();
    validateTable();
    text.classList.add("d-none");
  } else {
    text.classList.remove("d-none");
  }
}
