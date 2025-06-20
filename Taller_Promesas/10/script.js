function leerArchivo(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (["a.txt", "b.txt", "c.txt"].includes(nombre)) {
                resolve(`📄 Leído: ${nombre}`);
            } else {
                reject(`❌ Error al leer ${nombre}`);
            }
        }, 2000); // Simula distintos tiempos
    });
}

document.getElementById("secuenciaBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultados = document.getElementById("resultados");
    const error = document.getElementById("error");

    const resA = document.getElementById("res-a");
    const resB = document.getElementById("res-b");
    const resC = document.getElementById("res-c");

    // Resetear
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Leyendo a.txt...";
    resultados.classList.add("hidden");
    resA.textContent = "";
    resB.textContent = "";
    resC.textContent = "";
    error.classList.add("hidden");

    leerArchivo("a.txt")
        .then(r1 => {
          resA.textContent = r1;
          estado.textContent = "⏳ Leyendo b.txt...";
          return leerArchivo("b.txt");
        })
        .then(r2 => {
          resB.textContent = r2;
          estado.textContent = "⏳ Leyendo c.txt...";
          return leerArchivo("c.txt");
        })
        .then(r3 => {
          resC.textContent = r3;
          estado.classList.add("hidden");
          resultados.classList.remove("hidden");
        })
        .catch(err => {
          estado.classList.add("hidden");
          error.textContent = err;
          error.classList.remove("hidden");
        });
});