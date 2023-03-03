/** @format */

// get input
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

// addEventlistner
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = (message);
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const regexCheck =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexCheck.test(String(email).toLocaleLowerCase());
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is mandatory");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is mandatory");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is mandatory");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (confirmpasswordValue === "") {
    setError(confirmpassword, "Please confirm your password");
  } else if (confirmpasswordValue !== passwordValue) {
    setError(confirmpassword, "Password doesn't match");
  } else {
    setError(confirmpassword);
  }
};
