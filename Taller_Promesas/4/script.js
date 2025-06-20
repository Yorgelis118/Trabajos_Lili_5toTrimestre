function login(usuario, clave) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && clave === "123") {
                resolve("✅ Bienvenido, " + usuario + "!");
            } else {
                reject("❌ Usuario o clave incorrectos.");
            }
        }, 1000); // Simula tiempo de espera
    });
}

document.getElementById("loginBtn").addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
    const estado = document.getElementById("estado");

    estado.textContent = "⏳ Validando credenciales...";
    estado.className = "mt-4 text-yellow-300";

    login(usuario, clave)
        .then(mensaje => {
            estado.textContent = mensaje;
            estado.className = "mt-4 text-green-400 font-bold";
        })
        .catch(error => {
            estado.textContent = error;
            estado.className = "mt-4 text-red-500 font-bold";
        });
});