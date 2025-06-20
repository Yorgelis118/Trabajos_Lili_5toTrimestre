function cargarJSON() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ nombre: "Camila", edad: 17, ciudad: "Medellín" }), 1000);
    });
}

document.getElementById("cargarBtn").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    resultado.classList.add("hidden");
    estado.classList.remove("hidden");
    estado.textContent = "⏳ Cargando JSON...";

    cargarJSON()
        .then(data => {
            estado.classList.add("hidden");
            resultado.innerHTML = `✅ Datos recibidos:<br>😊 Nombre: ${data.nombre}<br>📍 Ciudad: ${data.ciudad}<br>🎂 Edad: ${data.edad}`;
            resultado.classList.remove("hidden", "text-red-500");
            resultado.classList.add("text-green-400");
        });
});