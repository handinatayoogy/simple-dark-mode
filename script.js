const button = document.querySelector(".tombol-warna");
const html = document.querySelector("html");
const navbar = document.querySelector("#navbar");

button.addEventListener("click", function () {
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
    this.classList.remove("fa-moon");
    this.classList.add("fa-sun");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  } else {
    html.dataset.colorMode = "light";
    this.classList.remove("fa-sun");
    this.classList.add("fa-moon");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  }
});
