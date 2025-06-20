function verificarSesion(token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === "abc123") {
                resolve("✅ Sesión activa");
            } else {
                reject("❌ Token caducado o inválido");
            }
        }, 1500);
    });
}

document.getElementById("verificarBtn").addEventListener("click", () => {
    const token = document.getElementById("token").value;
    const estado = document.getElementById("estado");
    const mensaje = document.getElementById("mensaje");

    estado.classList.remove("hidden");
    estado.textContent = "⏳ Verificando token...";
    mensaje.classList.add("hidden");
    mensaje.className = "hidden text-center font-semibold";

    verificarSesion(token)
        .then(msg => {
            estado.classList.add("hidden");
            mensaje.textContent = msg;
            mensaje.classList.remove("hidden");
            mensaje.classList.add("text-green-400");
        })
        .catch(err => {
            estado.classList.add("hidden");
            mensaje.textContent = err;
            mensaje.classList.remove("hidden");
            mensaje.classList.add("text-red-500");
        });
});