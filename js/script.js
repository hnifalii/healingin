// ini javascript

let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;

  const devBtn = document.getElementById("devLoginBtn");
  const navBtn = document.getElementById("navLoginBtn");

  if (!isLoggedIn) {
    devBtn.innerText = "Masuk";
    navBtn.innerText = "Masuk";
    navBtn.onclick = () => toggleLoginPopup();
  } else {
    devBtn.innerText = "Keluar";
    navBtn.innerHTML = `<a href="/profile"><img src="assets/user.svg" /></a>`;
    navBtn.onclick = "";
  }
}

// login and register popup handler
// get document elements
const loginPopup = document.getElementById("loginPopup");
const registerPopup = document.getElementById("registerPopup");

function showPopup(popup) {
  // hide all popup if any is opened
  [loginPopup, registerPopup].forEach((el) =>
    el.classList.replace("flex", "hidden")
  );

  // show popup
  popup.classList.replace("hidden", "flex");
}

function toggleLoginPopup() {
  const isOpen = !loginPopup.classList.contains("hidden");

  if (isOpen) {
    loginPopup.classList.replace("flex", "hidden"); // close if it's opened
  } else {
    showPopup(loginPopup); // show only this popup
  }

  console.log("Login popup:", !loginPopup.classList.contains("hidden"));
}

function toggleRegisterPopup() {
  const isOpen = !registerPopup.classList.contains("hidden");

  if (isOpen) {
    registerPopup.classList.replace("flex", "hidden"); // close if it's opened
  } else {
    showPopup(registerPopup); // show only this popup
  }

  console.log("Register popup:", !registerPopup.classList.contains("hidden"));
}

// password state handling
const registerPassword = document.getElementById("password1");
const registerPasswordBtn = document.getElementById("passwordBtn1");

const registerConPassword = document.getElementById("confirmPassword");
const registerConPasswordBtn = document.getElementById("confirmPassword");

const loginPassword = document.getElementById("password2");
const loginPasswordBtn = document.getElementById("passwordBtn2");

function togglePassword(input) {

  
    if (input.type == "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }

}

