function validarStock(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (producto.trim().toLowerCase() === "camisa") {
                resolve("✅ Producto disponible");
            } else {
                reject("❌ Producto agotado");
            }
        }, 1500);
    });
}

function procesarPago(tarjeta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tarjeta.length === 16 && /^\d+$/.test(tarjeta)) {
                resolve("💳 Pago aprobado");
            } else {
                reject("❌ Error en el pago: tarjeta inválida");
            }
        }, 1500);
    });
}

document.getElementById("comprarBtn").addEventListener("click", () => {
    const producto = document.getElementById("producto").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const estado = document.getElementById("estado");
    const mensaje = document.getElementById("mensaje");

    // Resetear mensajes
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Verificando stock...";
    mensaje.classList.add("hidden");
    mensaje.className = "hidden text-center font-semibold";

    validarStock(producto)
        .then(() => {
            estado.textContent = "⏳ Procesando pago...";
            return procesarPago(tarjeta);
        })
        .then(() => {
            estado.classList.add("hidden");
            mensaje.textContent = "✅ ¡Compra exitosa!";
            mensaje.classList.remove("hidden");
            mensaje.classList.add("text-green-400");
        })
        .catch(error => {
            estado.classList.add("hidden");
            mensaje.textContent = error;
            mensaje.classList.remove("hidden");
            mensaje.classList.add("text-red-500");
        });
});