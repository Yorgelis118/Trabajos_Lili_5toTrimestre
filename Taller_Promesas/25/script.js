function leerArchivo(nombre) {
    return new Promise((resolve, reject) => {
        // Simular archivo válido
        if (nombre === "valido.txt") {
            resolve("📄 Contenido del archivo leído correctamente.");
        } else {
            reject("❌ El archivo no existe.");
        }
    });
}

document.getElementById("leerBtn").addEventListener("click", () => {
    const resultado = document.getElementById("resultado");
    resultado.classList.add("hidden");

    leerArchivo("inexistente.txt")
        .then(contenido => {
            resultado.textContent = contenido;
            resultado.classList.remove("hidden", "text-red-500");
            resultado.classList.add("text-green-400");
        })
        .catch(error => {
            resultado.textContent = error;
            resultado.classList.remove("hidden", "text-green-400");
            resultado.classList.add("text-red-500");
        });
});