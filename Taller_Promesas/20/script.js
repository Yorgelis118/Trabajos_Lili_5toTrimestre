const pasos = document.getElementById("pasos");
const completo = document.getElementById("completo");

function mostrarPaso(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    pasos.appendChild(li);
}

function paso1() {
    return new Promise(resolve => {
        setTimeout(() => {
            mostrarPaso("Paso 1: Preparando datos...");
            resolve();
        }, 1000);
    });
}

function paso2() {
    return new Promise(resolve => {
        setTimeout(() => {
            mostrarPaso("Paso 2: Validando información...");
            resolve();
        }, 1000);
    });
}

function paso3() {
    return new Promise(resolve => {
        setTimeout(() => {
            mostrarPaso("Paso 3: Guardando resultados...");
            resolve();
        }, 1000);
    });
}

document.getElementById("iniciarBtn").addEventListener("click", () => {
    pasos.innerHTML = "";
    completo.classList.add("hidden");
    pasos.classList.remove("hidden");

    paso1()
        .then(() => paso2())
        .then(() => paso3())
        .then(() => {
            completo.classList.remove("hidden");
        });
});