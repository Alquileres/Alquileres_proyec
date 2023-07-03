const loginCtr = {};
const bcrypt = require("bcrypt");
// const { generarJWT } = require("../helpers/generar_jwt");
// const registro = require("../models/login");

const Usuario = require("../models/registro");

loginCtr.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //se verifica si el email ya existe
    const existeUsuario = await Usuario.findOne({ email: email });

    console.log(existeUsuario.password, password);

    const pass = JSON.stringify(existeUsuario.password);

    console.log(pass);

    if (!existeUsuario) {
      return res.status(400).json({
        message: "el email no existe",
      });
    }

    // Verificar si el usuario está activo
    // if (!existeUsuario.estado) {
    //   return res.status(400).json({
    //     message: "El usuario no está activo",
    //   });
    // }

    console.log(
      "$2b$10$/FtG7rDyk07x1OKzk6Etr.1uoRCfnbn3e5zDOgVN6iQCRqECTrTMG",
      existeUsuario.password
    );

    // Verificar la contraseña
    const passwordValido = await bcrypt.compare(
      password,
      "$2b$10$/FtG7rDyk07x1OKzk6Etr.1uoRCfnbn3e5zDOgVN6iQCRqECTrTMG"
    );

    console.log(passwordValido);

    if (!passwordValido) {
      return res.status(400).json({
        message: "La contraseña no es válida",
      });
    }

    // // Generar el JWT
    // const token = await generarJWT(existeUsuario.id);

    // res.json({
    //   message: "Login correcto",
    //   token,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};

module.exports = loginCtr;
