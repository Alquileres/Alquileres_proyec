//  config de dotenv
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const path = require("path");

const port = process.env.PORT || 5500;

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./db");

// Conexión a base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

require("ejs");

// Se inicializa express para poder usar sus métodos
const app = express();

// Conf Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos utilizando la librería path que viene en NodeJS
app.use(express.static(path.join(__dirname, "Public")));

// Configurar el directorio de vistas

// Configuración de motor de plantillas EJS

app.set("view engine", "ejs");

// Configuración de rutas
app.use(require("./router/index.router"));

app.use(require("./router/registro"));
app.use(require("./router/ruta.login"));

// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
