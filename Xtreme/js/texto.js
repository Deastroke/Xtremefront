document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;

    nextButton.addEventListener("click", () => {
        index = (index + 1) % 2; // Solo tienes dos imágenes
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + 2) % 2;
        updateCarousel();
    });

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${index * 50}%)`;
    }
});
