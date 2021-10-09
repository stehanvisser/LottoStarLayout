const loginUrl = "https://lottostar.co.za/login";
const registrationUrl = "https://lottostar.co.za/register";

function validateForm(e) {
  e.preventDefault();
  let mainForm = document.getElementById("main-form");
  let submittedForm = document.getElementById("form-submitted");
  mainForm.style.display = "none";
  submittedForm.style.display = "block";
}

function login() {
  window.open(loginUrl, "_blank").focus();
}

function register() {
  window.open(registrationUrl, "_blank").focus();
}
