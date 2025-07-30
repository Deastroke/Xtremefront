const BACKEND_URL = "https://xtremebackend.onrender.com";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío inmediato

        const formData = new FormData(form);
        const urlEncodedData = new URLSearchParams();
        for (const pair of formData.entries()) {
            urlEncodedData.append(pair[0], pair[1]);
        }

        fetch(`${BACKEND_URL}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData
        })
        .then(response => response.text())
        .then(data => {
            mostrarAlerta(data, "success");
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
            mostrarAlerta("❌ Hubo un problema al enviar el mensaje", "error");
        });
    });
});

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById("alerta");
    const alertaMensaje = document.getElementById("alerta-mensaje");

    if (tipo === "success") {
        alertaMensaje.innerHTML = "✔️ " + mensaje;
    } else {
        alertaMensaje.textContent = mensaje;
    }

    alerta.className = "alerta " + tipo;
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
}

