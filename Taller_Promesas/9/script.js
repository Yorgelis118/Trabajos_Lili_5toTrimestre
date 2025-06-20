function leerArchivo(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre === "a.txt" || nombre === "b.txt") {
                resolve(`📄 Contenido de ${nombre}`);
            } else {
                reject(`❌ No se pudo leer ${nombre}`);
            }
        }, Math.random() * 2000 + 1000); // Simula distintos tiempos de carga
    });
}

document.getElementById("leerBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultados = document.getElementById("resultados");
    const error = document.getElementById("error");

    // Resetear estados
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Leyendo archivos...";
    resultados.classList.add("hidden");
    error.classList.add("hidden");

    Promise.all([leerArchivo("a.txt"), leerArchivo("b.txt")])
        .then(contenidos => {
            estado.classList.add("hidden");
            resultados.innerHTML = contenidos.map(c => `<p>${c}</p>`).join("");
            resultados.classList.remove("hidden");
        })
        .catch(err => {
            estado.classList.add("hidden");
            error.textContent = err;
            error.classList.remove("hidden");
        });
});