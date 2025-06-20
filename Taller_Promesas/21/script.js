function validarNombre(nombre) {
    return new Promise((resolve, reject) => {
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        if (!soloLetras.test(nombre.trim())) {
            reject("❌ El nombre solo debe contener letras.");
        } else if (nombre.trim().length < 3) {
            reject("❌ El nombre debe tener al menos 3 caracteres.");
        } else {
            resolve();
        }
    });
}

function validarCorreo(correo) {
    return new Promise((resolve, reject) => {
        const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (regex.test(correo)) {
            resolve();
        } else {
            reject("❌ Correo electrónico inválido.");
        }
    });
}

function enviar() {
    const estado = document.getElementById("estado");
    estado.textContent = "✅ Formulario enviado correctamente.";
    estado.classList.remove("hidden", "text-red-500");
    estado.classList.add("text-green-400");
}

document.getElementById("validarBtn").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const estado = document.getElementById("estado");

    estado.classList.add("hidden");

    Promise.all([
        validarNombre(nombre),
        validarCorreo(correo)
    ])
        .then(() => {
            enviar();
        })
        .catch(error => {
            estado.textContent = error;
            estado.classList.remove("hidden", "text-green-400");
            estado.classList.add("text-red-500");
        });
});