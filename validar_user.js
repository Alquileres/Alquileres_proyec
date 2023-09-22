
  (() => {
    // Se comprueba si el token en el navegador es válido
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No hay token");
      window.location.href = "/login_locatario";
    } else {
      // Se comprueba si el token es válido en el servidor
      fetch("http://localhost:5500/api/validar-token", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.ok) {
            console.log("Token no válido");
            localStorage.removeItem("token");
            window.location.href = "/login";
          }
          console.log("Token válido");
        })
        .catch((err) => console.log(err));
    }
  })();

