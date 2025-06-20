function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`❌ Error al cargar: ${url}`);
        img.src = url;
    });
}

document.getElementById("cargarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const galeria = document.getElementById("galeria");
    const error = document.getElementById("error");

    const urls = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300?grayscale"
    ];

    estado.classList.remove("hidden");
    estado.textContent = "⏳ Cargando imágenes...";
    galeria.innerHTML = "";
    galeria.classList.add("hidden");
    error.classList.add("hidden");

    Promise.all(urls.map(cargarImagen))
        .then(imagenes => {
            imagenes.forEach(img => {
                img.classList.add("rounded", "shadow-md");
                galeria.appendChild(img);
            });
            estado.classList.add("hidden");
            galeria.classList.remove("hidden");
        })
        .catch(err => {
            estado.classList.add("hidden");
            error.textContent = err;
            error.classList.remove("hidden");
        });
});