(() => {
    'use strict'

    // ===== Navbar activo =====
    const links = document.querySelectorAll(".nav-link");
    if (links.length > 0) {
        const currentPage = window.location.pathname.split("/").pop();
        links.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

})();



