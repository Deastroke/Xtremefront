document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("info-img");
    setTimeout(() => {
        img.classList.remove("hidden");
        img.classList.add("visible");
    }, 300); // Pequeño retraso para que se note el efecto
});

