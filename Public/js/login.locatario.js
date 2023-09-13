// Agrega el evento "submit" al formulario
document
  .getElementById("formLogin")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Realiza una solicitud al servidor para validar el inicio de sesión
      const response = await fetch(
        "http://localhost:5500/api/login_locatario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Inicio de sesión exitoso, redirige al usuario a la página de inicio
        window.location.href = "/";
      } else {
        // Error en el inicio de sesión, muestra un mensaje de error al usuario
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      // Error en la solicitud
      console.error("Error al realizar la solicitud:", error);
    }
  });
