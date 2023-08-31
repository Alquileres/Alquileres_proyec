const formNuevoUsuario = document.querySelector("#formNuevoUsuario");

formNuevoUsuario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameUser = document.querySelector("#nameUser").value;
  const email = document.querySelector("#email").value;
  const telefono = document.querySelector("#telefono").value;
  const dni = document.querySelector("#dni").value;
  const password = document.getElementById("password").value;
  const conf_Password = document.querySelector("#Conf_Password").value;

  if (password !== conf_Password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas no coinciden",
    });
    return;
  }

  const response = await fetch("http://localhost:5500/api/registro_locatario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nameUser,
      email,
      telefono,
      dni,
      password,
      conf_Password,
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
    title: "registro creado",
    text: respToJson.message,
  });

  console.log(respToJson.message);

  formNuevoUsuario.reset();

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
