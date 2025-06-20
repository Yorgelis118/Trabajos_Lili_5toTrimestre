function obtenerUbicacion() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("⚠️ Geolocalización no soportada por el navegador.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (success) => resolve(success.coords),
            (error) => reject("❌ Error: " + error.message)
        );
    });
}

document.getElementById("ubicacionBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");
    const errorDiv = document.getElementById("error");
    const latitud = document.getElementById("latitud");
    const longitud = document.getElementById("longitud");

    // Resetear estado
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Obteniendo ubicación...";
    resultado.classList.add("hidden");
    errorDiv.classList.add("hidden");

    obtenerUbicacion()
        .then(coords => {
            estado.classList.add("hidden");
            latitud.textContent = "Latitud: " + coords.latitude;
            longitud.textContent = "Longitud: " + coords.longitude;
            resultado.classList.remove("hidden");
        })
        .catch(error => {
            estado.classList.add("hidden");
            errorDiv.textContent = error;
            errorDiv.classList.remove("hidden");
        });
});