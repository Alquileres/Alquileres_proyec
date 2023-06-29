const formNuevoUsuario = document.querySelector("#formNuevoUsuario");

formNuevoUsuario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const Telefono = document.querySelector("#telefono").value;
  const DNI = document.querySelector("#dni").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas no coinciden",
    });
    return;
  }

  const response = await fetch("http://localhost:5500/api/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      Telefono,
      DNI,
      password,
    }),
  });

  const respToJson = await response.json();

  if (response.status !== 201 && response.status !== 200) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: respToJson.message,
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Usuario creado",
    text: respToJson.message,
  });

  console.log(respToJson.message);

  formNuevoUsuario.reset();

  setTimeout(() => {
    window.location.href = "/index";
  }, 2000);
});
