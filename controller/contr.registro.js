const registroCtr = {};
const bcrypt = require("bcrypt");
const Usuario = require("../models/registro");

//crear un nuevo registro

registroCtr.crearRegistro = async (req, res) => {
  const { nameUser, email, telefono, dni, password, conf_Password } = req.body;

  try {
    //para verificar si el registro ya existe
    const existeRegistro = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (existeRegistro) {
      throw {
        status: 400,
        message: "El registro ya existe",
      };
    }
    const nuevoRegistro = new Usuario({
      nameUser,
      email,
      telefono,
      dni,
      password,
      conf_Password,
    });

    //encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    nuevoRegistro.password = await bcrypt.hash(password, salt);

    //guardar usuario en la base de datos

    const registroCreado = await nuevoRegistro.save();

    if (!registroCreado) {
      throw {
        menssage: "error al crear el registro ",
      };
    }

    //se retorna la respuesta al cliente

    return res.status(201).json({
      message: "registro creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "error al creer registro",
    });
  }
};

// Ctrl para obtener datos de un único usuario
registroCtr.obtenerRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw {
        status: 404,
        message: "No se ha encontrado el registro",
      };
    }

    return res.json(usuario);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

// Controlador para obtener todos los registros
registroCtr.obtenerRegistros = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      where: {
        estado: true,
      },
    });

    if (!usuarios) {
      throw {
        status: 404,
        message: "No se encontraron los registros",
      };
    }

    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al obtener los registros",
    });
  }
};

module.exports = registroCtr;
