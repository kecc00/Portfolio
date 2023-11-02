const toggleButton = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarLinks.classList.remove('active');
    }
});