var filter = document.querySelector(".add-plan__choose-country-popup");
var filterLink = document.querySelector(".add-plan__choose-link");
var filterButton = document.querySelector(".add-plan__choose-button");

filterLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.toggle("add-plan__choose-country-popup--opened");
});

filterButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.toggle("add-plan__choose-country-popup--opened");
});
