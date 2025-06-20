function obtenerDatos(url) {
    return fetch(url).then(res => res.json());
}

document.getElementById("llamarApi").addEventListener("click", () => {
    const estado = document.getElementById("estado");
    const resultado = document.getElementById("resultado");

    estado.classList.remove("hidden");
    estado.textContent = "⏳ Cargando datos...";
    resultado.classList.add("hidden");
    resultado.textContent = "";

    const url = "https://jsonplaceholder.typicode.com/users/1";

    obtenerDatos(url)
        .then(data => {
            estado.classList.add("hidden");
            resultado.classList.remove("hidden");
            resultado.innerHTML = `
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Usuario:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Ciudad:</strong> ${data.address.city}</p>
          `;
        })
        .catch(error => {
            estado.textContent = "❌ Error al obtener los datos.";
            console.error(error);
        });
});