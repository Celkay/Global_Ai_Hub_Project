document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop - 50; // Header yüksekliğini düşürmek için

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
