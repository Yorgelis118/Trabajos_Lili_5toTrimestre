const baseDeDatos = {
    1: { nombre: "Camila", rol: "Administradora" },
    2: { nombre: "Alex", rol: "Usuario" },
    3: { nombre: "Luis", rol: "Invitado" }
};

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (baseDeDatos[id]) {
                resolve(baseDeDatos[id]);
            } else {
                reject("❌ Usuario no encontrado.");
            }
        }, 1500);
    });
}

document.getElementById("buscarBtn").addEventListener("click", () => {
    const input = document.getElementById("inputID");
    const id = parseInt(input.value); // Convertir a número
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    resultado.classList.add("hidden");
    resultado.textContent = "";
    estado.textContent = "🔍 Buscando usuario...";
    estado.classList.remove("hidden");

    buscarUsuario(id)
        .then(usuario => {
            estado.classList.add("hidden");
            resultado.innerHTML = `✅ <strong>${usuario.nombre}</strong> (${usuario.rol})`;
            resultado.classList.remove("hidden", "text-red-500");
            resultado.classList.add("text-green-400");
        })
        .catch(error => {
            estado.classList.add("hidden");
            resultado.textContent = error;
            resultado.classList.remove("hidden", "text-green-400");
            resultado.classList.add("text-red-500");
        });
});