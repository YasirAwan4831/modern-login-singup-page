/* Login Function*/
function loginUser() {
  // Get input values
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // basic valideation 
if (username === ""|| password === "") {
  alert("please fill all the fields.");
  return false;  
}

if (password.length < 8) {
  alert("password must be at leasts 8 charactes.");
  return false;
}

  // Dummy login credentials check
  if (username === "admin" && password === "1234") {
    alert("Login Successful 🎉");
  } else {
    alert("Invalid Username or Password ❌");
  }

  function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
function sendResetEmail() {
let email = document.getElementById("resetEmail").value.trim();
if (!validateEmail(email)) {
alert("Please enter a valid email address.");
return false;
}
alert("Reset link sent to " + email);
return false;
}

  // Prevent form submission
  return false;
}

/* Forgot Password Function */
function sendResetEmail() {
  let email = document.getElementById("resetEmail").value;
  alert("Reset link sent to " + email);
  return false;
}

/*  Sign Up Function */
function registerUser() {
  alert("Account created successfully");

  // Redirect user to login form
  showForm('loginForm');
  return false;
}

/*  Function to Toggle Forms  */
function showForm(formId) {
  let forms = ["loginForm", "forgotForm", "signupForm"];

  // Hide all forms first
  forms.forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  // Show the selected form
  document.getElementById(formId).classList.remove("hidden");
}
