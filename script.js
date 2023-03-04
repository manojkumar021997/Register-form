/** @format */

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const mobilenumber = document.getElementById("mobilenumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();
  const mobilenumberValue = mobilenumber.value.trim();

  if (nameValue == "") {
    setError(name, "Name Cannot be Blank");
  } else {
    setSuccess(name);
  }

  if (emailValue == "") {
    setError(email, "Email Cannot be Blank");
  } else if (emailValue.indexOf("@") <= 0) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }

  if (confirmpasswordValue === "") {
    setError(confirmpassword, "Confirm Password Cannot be Blank");
  } else if (passwordValue !== confirmpasswordValue) {
    setError(confirmpassword, "Incorrect password");
  } else {
    setSuccess(confirmpassword);
  }

  let passw = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;

  if (passwordValue === "") {
    setError(password, "Password Cannot be Blank");
  } else if (!passwordValue.match(passw)) {
    setError(password, "Enter Valid password");
  } else {
    setSuccess(password);
  }

  if (mobilenumberValue == "") {
    setError(mobilenumber, "MobileNumber Cannot be Blank");
  } else if (mobilenumberValue.length < 10 || mobilenumberValue.length > 10) {
    setError(mobilenumber, "Enter Valid number");
  } else {
    setSuccess(mobilenumber);
  }

  function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }
  function setSuccess(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
    small.innerText = message;
  }
}
