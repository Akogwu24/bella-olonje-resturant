const hamburger = document.getElementById("bars");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
