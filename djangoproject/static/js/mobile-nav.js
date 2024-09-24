let mobileMenuButton = document.getElementById("mobile-menu-button");
let line1 = document.getElementById("a");
let line2 = document.getElementById("b");
let line3 = document.getElementById("c");
let mobileOpenMenu = document.getElementById("mobile-menu");
let mobileMenuOptions = document.getElementById("mobile-options-container");

mobileMenuButton.addEventListener("click", function () {
  line1.classList.toggle("a");
  line2.classList.toggle("b");
  line3.classList.toggle("c");
  mobileOpenMenu.classList.toggle("open");
  mobileMenuOptions.classList.toggle("open");
});