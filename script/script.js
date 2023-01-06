const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLink = document.getElementsByClassName("navbar-link")[0];

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLink.classList.toggle("active");
});
