var filterButton = document.querySelector(".filter-country__button");
var filter = document.querySelector(".filter-country__list-wrap");
var filterClose = document.querySelector(".filter-country__close");

filterButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.add("filter-country--opened");
});

filterClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.remove("filter-country--opened");
});
