let controller;

document.getElementById("iniciarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");

    // Resetear
    resultado.classList.add("hidden");
    error.classList.add("hidden");
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Cargando datos...";

    controller = new AbortController();

    // API que se demora un poco más (ejemplo real)
    fetch("https://jsonplaceholder.typicode.com/photos", {
        signal: controller.signal
    })
        .then(res => {
            // Simulamos una espera artificial de 3 segundos
            return new Promise(resolve => {
                setTimeout(() => resolve(res.json()), 2000);
            });
        })
        .then(data => {
            estado.classList.add("hidden");
            resultado.textContent = `✅ Se recibieron ${data.length} fotos`;
            resultado.classList.remove("hidden");
        })
        .catch(err => {
            estado.classList.add("hidden");
            if (err.name === "AbortError") {
                error.textContent = "❌ Solicitud cancelada por el usuario.";
            } else {
                error.textContent = "❌ Error al cargar datos.";
            }
            error.classList.remove("hidden");
        });
});

document.getElementById("cancelarBtn").addEventListener("click", () => {
    if (controller) {
        controller.abort();
    }
});