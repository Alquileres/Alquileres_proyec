const { sequelize, DataTypes } = require("../db");

const Usuario = sequelize.define("registro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conf_Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Usuario.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});

//exportar

module.exports = Usuario;
