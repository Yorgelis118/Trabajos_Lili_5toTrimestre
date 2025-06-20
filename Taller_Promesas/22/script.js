function verificarValor(valor) {
    return new Promise((resolve, reject) => {
        if (valor > 10) {
            resolve("✅ Valor válido: es mayor a 10.");
        } else {
            reject("❌ El valor debe ser mayor a 10.");
        }
    });
}

document.getElementById("verificarBtn").addEventListener("click", () => {
    const input = document.getElementById("valor");
    const valor = parseFloat(input.value);
    const estado = document.getElementById("estado");

    estado.classList.remove("text-red-500", "text-green-400", "hidden");

    verificarValor(valor)
        .then(mensaje => {
            estado.textContent = mensaje;
            estado.classList.add("text-green-400");
        })
        .catch(error => {
            estado.textContent = error;
            estado.classList.add("text-red-500");
        });
});