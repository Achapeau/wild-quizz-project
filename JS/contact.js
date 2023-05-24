document.querySelector(".menu-burger").addEventListener("click", function () {
  const menuDropdown = document.querySelector(".menu-dropdown");
  if (menuDropdown.style.display === "none") {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
});

const form = document.querySelector(".contact-form");
const firstName = document.querySelector("#first-name");

form.onsubmit = function (event) {
  event.preventDefault();

  const firstNameValue = firstName.value;
  alert(`Merci pour ton message ${firstNameValue} !`);
};
