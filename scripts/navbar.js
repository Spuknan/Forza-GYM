/* navbar scroll */
var navbar = document.querySelector("nav");

window.onscroll = function () {
    if (window.pageYOffset > 600) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

/* scroll reveal */

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
})
).reveal('.index__cards--row');
