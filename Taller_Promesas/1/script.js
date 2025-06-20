function leerArchivoReal(file) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();

    lector.onload = () => resolve(lector.result);
    lector.onerror = () => reject("❌ Error al leer el archivo.");

    lector.readAsText(file); // Leer como texto plano
  });
}

document.getElementById("leerBtn").addEventListener("click", () => {
  const input = document.getElementById("archivoInput");
  const cargando = document.getElementById("cargando");
  const resultado = document.getElementById("resultado");

  resultado.textContent = "";
  cargando.classList.remove("hidden");

  const archivo = input.files[0];

  if (!archivo) {
    cargando.classList.add("hidden");
    resultado.textContent = "⚠️ No se ha seleccionado ningún archivo.";
    return;
  }

  leerArchivoReal(archivo)
    .then(contenido => {
      cargando.classList.add("hidden");
      resultado.textContent = contenido;
    })
    .catch(error => {
      cargando.classList.add("hidden");
      resultado.textContent = error;
    });
});
