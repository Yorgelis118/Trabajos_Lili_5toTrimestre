function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`🕒 Espera de ${ms / 1000} segundos completada`);
        }, ms);
    });
}

document.getElementById("iniciarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    resultado.classList.add("hidden");
    estado.classList.remove("hidden");
    estado.textContent = "⏱️ Esperando 1 y 2 segundos...";

    Promise.all([esperar(1000), esperar(2000)])
        .then((mensajes) => {
            estado.classList.add("hidden");
            resultado.innerHTML = mensajes.join("<br>") + "<br>✅ Todas las esperas completadas.";
            resultado.classList.remove("hidden", "text-red-500");
            resultado.classList.add("text-green-400");
        });
});