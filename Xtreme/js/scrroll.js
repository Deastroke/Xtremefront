document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".carousel-content");

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.6) { // Ajustamos para mejor efecto
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Llamada inicial para los elementos en pantalla
});
