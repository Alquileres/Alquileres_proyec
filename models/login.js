const { sequelize, DataTypes } = require("../db");

const login = sequelize.define("login_locatario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Crear tabla si no existe ({force: true} borra y crea la tabla)
login.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});

module.exports = login;
