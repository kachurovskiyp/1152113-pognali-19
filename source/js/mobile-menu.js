var menuButton = document.querySelector(".menu-button");
var closeButton = document.querySelector(".mobile-menu__close");
var menu = document.querySelector(".mobile-menu");

menu.classList.remove("mobile-menu--no-js");

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("mobile-menu--opened");
});

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("mobile-menu--opened");
});
