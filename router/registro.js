const express = require("express");
const router = express.Router();
const {
  crearRegistro,
  obtenerRegistro,
  obtenerRegistros,
} = require("../controller/contr.registro");

// const { validarJWT } = require("../middlewares/validar_jw");
// const { validarJWT } = require("../middlewares/validar_jw");

// ==========================================
// Rutas para renderizar las vistas de usuarios
// ==========================================
router.get("/registro_locatario", async (req, res) => {
  return res.render("auth/registro_locatario/registro");
});

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// // Ruta para obtener los datos de todos los usuarios
// router.get("/api/registros/", [validarJWT], obtenerRegistros);

// Ruta para obtener los datos de UN solo usuario
router.get("/api/registro/:id", obtenerRegistro);
// Nuevo usuario
router.post("/api/registro_locatario/", crearRegistro);

// // Ruta para obtener los datos de UN solo usuario
// router.get("/api/registro/:id", obtenerRegistro);

module.exports = router;
