var navbar = document.querySelector("nav");

window.onscroll = function () {
    if (window.pageYOffset > 600) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};