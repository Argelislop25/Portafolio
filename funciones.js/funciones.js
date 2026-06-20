// 1. EFECTO BLUR EN EL NAVBAR AL HACER SCROLL
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. ANIMACIÓN FADE-IN EN LAS SECCIONES AL BAJAR LA PÁGINA
// Usamos IntersectionObserver, que es nativo de los navegadores modernos
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target); // Deja de observar una vez que ya apareció
        }
    });
}, {
    threshold: 0.1, // Se activa cuando se ve el 10% del elemento
    rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});