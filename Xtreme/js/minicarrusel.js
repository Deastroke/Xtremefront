document.addEventListener("DOMContentLoaded", () => {
    const minicarrusel = document.querySelector(".minicarrusel");

    // Verificar que el carrusel existe antes de continuar
    if (!minicarrusel) return;

    const minicarruselItems = minicarrusel.querySelectorAll(".minicarrusel-item");
    const minicarruselTotalItems = minicarruselItems.length;
    let minicarruselIndex = 0;

    const prevButton = minicarrusel.querySelector(".minicarrusel-prev");
    const nextButton = minicarrusel.querySelector(".minicarrusel-next");

    // Verificar si los botones existen
    if (!prevButton || !nextButton) return;

    function showMiniSlide(index) {
        minicarruselItems[minicarruselIndex].classList.remove("active");
        minicarruselIndex = (index + minicarruselTotalItems) % minicarruselTotalItems;
        minicarruselItems[minicarruselIndex].classList.add("active");
        minicarrusel.querySelector(".minicarrusel-slide").style.transform = `translateX(-${minicarruselIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
        showMiniSlide(minicarruselIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showMiniSlide(minicarruselIndex + 1);
    });

    // Auto avanzar cada 5 segundos
    setInterval(() => {
        showMiniSlide(minicarruselIndex + 1);
    }, 5000);
});
