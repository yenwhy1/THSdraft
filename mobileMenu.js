// mobileMenu.js
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnButton = btn.contains(e.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            menu.classList.remove('show');
        }
    });
});
