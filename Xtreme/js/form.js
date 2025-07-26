document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío inmediato

        // Crear un objeto FormData para enviar los datos del formulario
        const formData = new FormData(form);

        // Crear un objeto URLSearchParams para serializar los datos en formato adecuado
        const urlEncodedData = new URLSearchParams();
        for (const pair of formData.entries()) {
            urlEncodedData.append(pair[0], pair[1]);
        }

        // Enviar el formulario de manera asincrónica
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData
        })
        .then(response => response.text())  // Espera la respuesta en texto (mensaje de éxito o error)
        .then(data => {
            // Muestra el mensaje de éxito si el servidor responde
            mostrarAlerta(data, "success");  // La respuesta será "Mensaje enviado con éxito"
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

    // Si el tipo es "success", agrega la palomita
    if (tipo === "success") {
        alertaMensaje.innerHTML = "✔️ " + mensaje;  // Esto incluirá la palomita en el mensaje
    } else {
        alertaMensaje.textContent = mensaje;
    }

    alerta.className = "alerta " + tipo;
    alerta.style.display = "block";

    // Ocultar después de 3 segundos
    setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
}
