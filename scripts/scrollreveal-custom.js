window.sr = ScrollReveal();

sr.reveal('.scroll-updown', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
})

sr.reveal('.scroll-downup', {
    duration: 2000,
    origin: 'top',
    distance: '-200px',
})

sr.reveal('.scroll-fade', {
    duration: 3000,
})

sr.reveal('.scroll-leftright', {
    duration: 2000,
    origin: 'right',
    distance: '-100px',
})

sr.reveal('.scroll-rightleft', {
    duration: 2000,
    origin: 'left',
    distance: '-100px',
})