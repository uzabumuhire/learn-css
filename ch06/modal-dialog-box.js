var button = document.getElementById("open");
var close = document.getElementById("close");
var modal = document.getElementById("modal");

// Opens the modal when the user clicks the Sign up button
button.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("is-open");
});

// Closes the modal when the user clicks the Close button
close.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("is-open");
});