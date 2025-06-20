function enviarFormulario(datos) {
    return new Promise((resolve, reject) => {
        const { nombre, correo } = datos;
        setTimeout(() => {
            // Validación básica
            if (nombre.trim() !== "" && correo.includes("@") && correo.includes(".")) {
                resolve("✅ Enviado correctamente");
            } else {
                reject("❌ Error de validación");
            }
        }, 1500);
    });
}

document.getElementById("enviarBtn").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const estado = document.getElementById("estado");

    estado.classList.remove("hidden");
    estado.textContent = "⏳ Enviando datos...";
    estado.className = "text-yellow-300";

    enviarFormulario({ nombre, correo })
        .then(mensaje => {
            estado.textContent = mensaje;
            estado.className = "text-green-400 font-bold";
        })
        .catch(error => {
            estado.textContent = error;
            estado.className = "text-red-500 font-bold";
        });
});