let id = 1;
let filaEditando = null;

function agregarDato() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();

  if (!nombre || !edad) return;

  const tabla = document.getElementById("tablaDatos");

  if (filaEditando) {
    // Actualizar fila existente
    filaEditando.children[1].textContent = nombre;
    filaEditando.children[2].textContent = edad;
    filaEditando = null;
    document.getElementById("btnGuardar").textContent = "Guardar";
  } else {
    // Crear nueva fila
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td class="border px-4 py-2">${id}</td>
      <td class="border px-4 py-2">${nombre}</td>
      <td class="border px-4 py-2">${edad}</td>
      <td class="border px-4 py-2">
        <button onclick="editarFila(this)" class="bg-yellow-400 text-black px-2 py-1 rounded mr-1">Editar</button>
        <button onclick="eliminarFila(this)" class="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);
    id++;
  }

  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
}

function eliminarFila(boton) {
  const fila = boton.parentElement.parentElement;
  if (fila === filaEditando) {
    filaEditando = null;
    document.getElementById("btnGuardar").textContent = "Guardar";
  }
  fila.remove();
}

function editarFila(boton) {
  filaEditando = boton.parentElement.parentElement;
  document.getElementById("nombre").value = filaEditando.children[1].textContent;
  document.getElementById("edad").value = filaEditando.children[2].textContent;
  document.getElementById("btnGuardar").textContent = "Actualizar";
}