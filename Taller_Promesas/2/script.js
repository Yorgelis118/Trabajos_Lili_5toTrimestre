function promesaDeEspera() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Listo, gracias por esperar.");
    }, 3000); // Espera 3 segundos
  });
}

document.getElementById("iniciar").addEventListener("click", () => {
  const estado = document.getElementById("estado");
  estado.textContent = "⏳ Espera un momento...";

  promesaDeEspera().then((mensaje) => {
    estado.textContent = mensaje;
    estado.classList.add("text-green-400");
  });
});
