const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdown = document.getElementById("dropdown");

dropdownToggle.addEventListener("click", function (event) {
  dropdown.classList.toggle("is-open");
});