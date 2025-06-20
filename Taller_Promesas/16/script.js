function esperar(ms) {
    return new Promise((_, reject) =>
        setTimeout(() => reject("⏰ Tiempo de espera agotado."), ms)
    );
}

document.getElementById("consultarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    resultado.classList.add("hidden");
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Consultando...";

    // Simula una API lenta (con setTimeout)
    const simulacionFetch = new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ Datos recibidos correctamente.");
        }, 7000); // >5s → debería caer en timeout
    });

    Promise.race([simulacionFetch, esperar(5000)])
        .then(msg => {
            estado.classList.add("hidden");
            resultado.textContent = msg;
            resultado.classList.remove("hidden");
            resultado.classList.remove("text-red-500");
            resultado.classList.add("text-green-400");
        })
        .catch(error => {
            estado.classList.add("hidden");
            resultado.textContent = error;
            resultado.classList.remove("hidden");
            resultado.classList.remove("text-green-400");
            resultado.classList.add("text-red-500");
        });
});