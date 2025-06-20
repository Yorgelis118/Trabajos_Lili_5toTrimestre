document.getElementById("iniciarBtn").addEventListener("click", () => {
    const resultado = document.getElementById("resultado");
    resultado.classList.add("hidden");

    Promise.resolve(2)
        .then(v => {
          const doble = v * 2;
          resultado.innerHTML = `✅ Valor inicial= ${v}<br>✖️ Multiplicado por 2= ${doble}`;
          resultado.classList.remove("hidden");
        });
});