const registroLocatarioCtrl = {};
const bcrypt = require("bcrypt");
const registro = require("../models/registro.locatario");

// Controlador para crear nuevo usuario
registroLocatarioCtrl.crearRegistro = async (req, res) => {
  const { Usuario, Email, Telefono, DNI, Contraseña, Conf_Contraseña } =
    req.body;

  try {
    // Se verifica si el usuario ya existe
    const existeRegistro = await registro.findOne({
      where: {
        Email,
      },
    });

    if (existeRegistro) {
      throw {
        // throw siempre debe ejecutarse dentro de un try catch
        status: 400,
        message: "El registro ya existe",
      };
    }

    const nuevoRegistro = new registro({
      Usuario,
      Email,
      Telefono,
      DNI,
      Contraseña,
      Conf_Contraseña,
    });

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    nuevoRegistro.Contraseña = await bcrypt.hash(Contraseña, salt);

    // Guardar registro en la base de datos
    const registroCreado = await nuevoRegistro.save();

    if (!registroCreado) {
      throw {
        message: "Error al crear el registro",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json({
      message: "registro creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al crear el registro",
    });
  }
};

// Ctrl para obtener datos de un único registro
registroLocatarioCtrl.obtenerRegistro = async (req, res) => {
  const { id_reg_locatario } = req.params;

  try {
    const registro = await registro.findByPk(id_reg_locatario);

    if (!registro) {
      throw {
        status: 404,
        message: "No se ha encontrado el registro",
      };
    }

    return res.json(registro);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

// Controlador para obtener todos los usuarios
registroLocatarioCtrl.obtenerRegistros = async (req, res) => {
  try {
    const registros = await registros.findAll({
      where: {
        estado: true,
      },
    });

    if (!registros) {
      throw {
        status: 404,
        message: "No se encontraron registros",
      };
    }

    return res.status(200).json(registros);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al obtener los registros",
    });
  }
};

registroLocatarioCtrl.actualizarRegistro = async (req, res) => {
  const { id_reg_locatario } = req.params;

  const { Usuario, Email } = req.body;

  try {
    const registroActualizado = await registro.update(
      {
        Usuario,
        Email,
      },
      {
        where: {
          id_reg_locatario,
        },
      }
    );

    if (!registroActualizado) {
      throw {
        status: 400,
        message: "No se pudo actualizar el registro",
      };
    }

    return res.json({
      message: "registro actualizado correctamente",
      usuarioActualizado,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message:
        error.message || "Error de servidor, contacte al area de sistemas",
    });
  }
};

// Ctrl para eliminar un usuario de forma lógica
registroLocatarioCtrl.eliminarRegistro = async (req, res) => {
  const { id_reg_locatario } = req.params;

  try {
    // Se cambia el estado del registro a false para indicar que el usuario fue eliminado
    const registroEliminado = registro.update(
      {
        estado: false,
      },
      {
        where: {
          id_reg_locatario,
          estado: true,
        },
      }
    );

    // Si la BD devuelve false, significa que no eliminó
    if (!registroEliminado) {
      throw {
        status: 400,
        message: "Error al eliminar registro",
      };
    }

    // Si pasa la validación
    return res.json({
      message: "registro eliminado con éxito",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 5000).json({
      message:
        error.message || "Error de servidor, contacte al área de sistemas",
    });
  }
};

module.exports = registroLocatarioCtrl;
