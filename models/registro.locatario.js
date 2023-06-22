const { sequelize, DataTypes } = require('../db');

const registrolocatario = sequelize.define('registro', {
    // Model attributes are defined here
    id_reg_locatario:{
        type : DataTypes.INTEGER,
        allowNull :false
    },
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El email ya existe'
        },
    },
    Telefono : {
       type: DataTypes.INTEGER,
       allowNull: false
    },
    DNI : {
        type: DataTypes.INTEGER,
        allowNull: false
        
     },
    Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Conf_Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
   
    
});

// Crear tabla si no existe
registrolocatario.sync();

module.exports = registrolocatario;