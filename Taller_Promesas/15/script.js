// Simula una promesa que falla aleatoriamente
function operacionInestable() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() < 0.1; // 10% de probabilidad de éxito
            if (exito) {
                resolve("✅ Operación completada con éxito");
            } else {
                reject("❌ Falló la operación");
            }
        }, 1000);
    });
}

// Función que reintenta ejecutar fn hasta agotar intentos
function reintentar(fn, intentos) {
    return fn().catch(error => {
        if (intentos > 1) {
            console.log(`Reintentando... quedan ${intentos - 1}`);
            return reintentar(fn, intentos - 1);
        } else {
            throw error;
        }
    });
}

document.getElementById("reintentarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const mensaje = document.getElementById("mensaje");

    estado.textContent = "⏳ Ejecutando operación...";
    estado.classList.remove("hidden");
    mensaje.classList.add("hidden");

    reintentar(operacionInestable, 3)
        .then(resultado => {
            estado.classList.add("hidden");
            mensaje.textContent = resultado;
            mensaje.classList.remove("hidden");
            mensaje.classList.remove("text-red-500");
            mensaje.classList.add("text-green-400");
        })
        .catch(error => {
            estado.classList.add("hidden");
            mensaje.textContent = error;
            mensaje.classList.remove("hidden");
            mensaje.classList.remove("text-green-400");
            mensaje.classList.add("text-red-500");
        });
});