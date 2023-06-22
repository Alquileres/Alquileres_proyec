const { sequelize, DataTypes } = require('../db');

const login_locatario = sequelize.define('login', {
    // Model attributes are defined here
    id_login_locatario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
    Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

// Crear tabla si no existe
login_locatario.sync();

module.exports = login_locatario;