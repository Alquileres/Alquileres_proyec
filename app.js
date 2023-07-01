//  config de dotenv
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const port = process.env.PORT || 5500;
require("ejs");

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./config/db");

// Conexión a base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

// Se inicializa express para poder usar sus métodos
const app = express();

// Conf Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Archivos estáticos utilizando la librería path que viene en NodeJS
app.use(express.static(path.join(__dirname, "public")));

// Configuración de motor de plantillas EJS
app.set("view engine", "ejs");

// Configuración de rutas
app.use(require("./router/auth.rutas"));
app.use(require("./router/rut.Reg.Locatario"));

// Servidor en escucha de peticiones
app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));
