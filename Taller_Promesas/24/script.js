function leerSensor() {
    return new Promise(resolve => {
        setTimeout(() => resolve("🌡️ Temperatura: 35°C"), 1000);
    });
}

document.getElementById("leerBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    estado.classList.remove("hidden");
    resultado.classList.add("hidden");
    resultado.textContent = "";

    leerSensor()
        .then(dato => {
            estado.classList.add("hidden");
            resultado.textContent = dato;
            resultado.classList.remove("hidden");
        });
});