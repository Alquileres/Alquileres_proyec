const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db');
const port =process.env.PORT || 4800;
//  config de dotenv 
require('dotenv').config();

// Se inicializa express para poder usar sus métodos
const app = express();


// Conf Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Conexión a base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));





// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));