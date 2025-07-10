// /js/index.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para resaltar el botón de categoría activo ---
    const categoryLinks = document.querySelectorAll('.category-link-button');
    const currentPathname = window.location.pathname;

    categoryLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPathname) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


}); 