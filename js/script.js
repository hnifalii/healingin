// ini javascript

// UNIVERSAL LOGIC
let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;

  const devBtn = document.getElementById("devLoginBtn");
  const navLoginBtn = document.getElementById("navLoginBtn");
  const navProfileBtn = document.getElementById("navProfileBtn");

  if (!isLoggedIn) {
    devBtn.innerText = "Masuk";
    navLoginBtn.classList.replace("hidden", "block");
    navProfileBtn.classList.replace("flex", "hidden");
  } else {
    devBtn.innerText = "Keluar";
    navLoginBtn.classList.replace("block", "hidden");
    navProfileBtn.classList.replace("hidden", "flex");
  }
}

const registerBtn = document.getElementById("submitRegisterBtn");
const loginBtn = document.getElementById("submitLoginBtn");

// POPUP HANDLERS
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
    document.body.style.overflowY = "scroll"; // scroll off
  } else {
    showPopup(loginPopup); // show only this popup
    document.body.style.overflowY = "hidden"; // scroll off
  }

  console.log("Login popup:", !loginPopup.classList.contains("hidden"));
}

function toggleRegisterPopup() {
  const isOpen = !registerPopup.classList.contains("hidden");

  if (isOpen) {
    registerPopup.classList.replace("flex", "hidden"); // close if it's opened
    document.body.style.overflowY = "scroll"; // scroll off
  } else {
    showPopup(registerPopup); // show only this popup
    document.body.style.overflow = "hidden"; // scroll off
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

// NAVIGATION LOGIC
// underline active page
document.addEventListener("DOMContentLoaded", () => {
  let currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath === "/index.html") {
    currentPath = "/";
  }
  console.log(currentPath);
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    let linkPath = link.getAttribute("href");

    // set "/index.html" to "/"
    if (linkPath === "/" || linkPath === "/index.html") {
      linkPath = "/";
    }

    if (linkPath === currentPath) {
      link.classList.add("text-black", "font-semibold");
    } else {
      link.classList.remove("text-black", "font-semibold");
    }
  });

  // // devBtn for login state switch
  // const devBtn = `
  // <button
  //   id="devLoginBtn"
  //   onclick="toggleLoginStatus()"
  //   class="fixed bottom-5 right-5 px-3 py-1 bg-black text-white rounded-lg"
  // >
  //   Masuk
  // </button>`;

  // // insert the btn to every page
  // document.body.insertAdjacentHTML("afterbegin", devBtn)
});

// manipulate home page content
// const landingPage = ; 
// const homePage = ; 
// if (isLoggedIn == true) {

// }

