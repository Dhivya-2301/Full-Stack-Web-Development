// Registration Validation
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const regMessage = document.getElementById("regMessage");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      regMessage.style.color = "red";
      regMessage.textContent = "All fields are required";
      return;
    }

    if (password.length < 6) {
      regMessage.style.color = "red";
      regMessage.textContent = "Password must be at least 6 characters";
      return;
    }

    if (password !== confirmPassword) {
      regMessage.style.color = "red";
      regMessage.textContent = "Passwords do not match";
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", name);

    regMessage.style.color = "green";
    regMessage.textContent = "Registration successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}
// Login Validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const loginMessage = document.getElementById("loginMessage");

    if (loginEmail === "" || loginPassword === "") {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Please fill all fields";
      return;
    }

    if (loginEmail === savedEmail && loginPassword === savedPassword) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Invalid email or password";
    }
  });
}