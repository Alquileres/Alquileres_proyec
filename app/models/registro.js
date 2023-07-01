const { sequelize, DataTypes } = require("../db");

const registro = new sequelize.define("registro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
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
  conf_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//exportar

module.exports = registro;
