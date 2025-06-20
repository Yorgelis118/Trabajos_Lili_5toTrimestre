function login(usuario, clave) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (usuario === "admin" && clave === "123") {
            resolve(usuario);
          } else {
            reject("❌ Credenciales inválidas");
          }
        }, 1000);
      });
    }

    function obtenerPerfil(usuario) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            nombre: "Camila Rodríguez",
            rol: "Administrador",
            email: usuario + "camilarodriguez@gmail.com"
          });
        }, 1000);
      });
    }

    document.getElementById("loginBtn").addEventListener("click", () => {
      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      const estado = document.getElementById("estado");
      const perfil = document.getElementById("perfil");
      const error = document.getElementById("error");

      // Reiniciar mensajes
      estado.classList.remove("hidden");
      estado.textContent = "⏳ Iniciando sesión...";
      perfil.classList.add("hidden");
      error.classList.add("hidden");

      login(usuario, clave)
        .then(user => {
          estado.textContent = "🔄 Obteniendo perfil...";
          return obtenerPerfil(user);
        })
        .then(perfilData => {
          estado.classList.add("hidden");
          perfil.innerHTML = `
            👤 <strong>${perfilData.nombre}</strong><br>
            📧 ${perfilData.email}<br>
            🔐 Rol: ${perfilData.rol}
          `;
          perfil.classList.remove("hidden");
        })
        .catch(err => {
          estado.classList.add("hidden");
          error.textContent = err;
          error.classList.remove("hidden");
        });
    });