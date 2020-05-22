var priceBlockLink = document.querySelector(".price__business-price-link");
var priceBlock = document.querySelector(".business-price");
var priceBlockClose = document.querySelector(".business-price__close");

priceBlockLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  priceBlock.classList.add("business-price--opened");
});

priceBlockClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  priceBlock.classList.remove("business-price--opened");
});
