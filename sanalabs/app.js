// Variables
const dropDownLinkWrp = document.querySelectorAll(".drop-down__link");
const navigation = document.querySelector(".navbar-logo-center-container");
const dropDownToggle = document.querySelector(".nav-link.is--dropdown");

// Functions

// Event listeners
dropDownLinkWrp.forEach((link) => {
  link.addEventListener("mouseover", function () {
    const dropDownLink = link.querySelector(".drop-down__link-text-wrp");
    dropDownLink.classList.add("active");
  });
  link.addEventListener("mouseout", function () {
    const dropDownLink = link.querySelector(".drop-down__link-text-wrp");
    dropDownLink.classList.remove("active");
  });
});

function changeNavBg() {}
document.addEventListener("click", function () {
  console.log("hey");
  if (dropDownToggle.classList.contains("w--open")) {
    navigation.classList.remove("active");
  } else {
    navigation.classList.add("active");
  }
});
