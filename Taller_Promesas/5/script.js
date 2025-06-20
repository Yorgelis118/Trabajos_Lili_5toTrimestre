function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const imagen = new Image();
        imagen.onload = () => resolve(imagen);
        imagen.onerror = () => reject("❌ Error al cargar la imagen.");
        imagen.src = url;
    });
}

document.getElementById("cargarBtn").addEventListener("click", () => {
    const url = "https://picsum.photos/seed/picsum/200/300";
    const estado = document.getElementById("estado");
    const imagenMostrada = document.getElementById("imagenMostrada");

    estado.classList.remove("hidden");
    estado.textContent = "⏳ Cargando imagen...";
    imagenMostrada.classList.add("hidden");

    cargarImagen(url)
        .then(img => {
            imagenMostrada.src = img.src;
            imagenMostrada.classList.remove("hidden");
            estado.textContent = "✅ Imagen cargada correctamente.";
            estado.classList.replace("text-yellow-300", "text-green-400");
        })
        .catch(error => {
            estado.textContent = error;
            estado.classList.replace("text-yellow-300", "text-red-500");
        });
});