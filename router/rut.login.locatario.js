const router = require("express").Router();

const { crearUsuario } = require("../controller/controller.login");

// const { validarJWT } = require("../middlewares/validar_jwt");

// ==========================================
// Rutas para renderizar las vistas de usuarios
// ==========================================

// router.get("/usuario/nuevo", async (req, res) => {
//   return res.render("usuario/nuevo_usuario");
// });

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// Nuevo usuario
router.post("/api/usuario/", crearUsuario);

module.exports = router;
