const router = require("express").Router();

const {
  obtenerRegistros,
  obtenerRegistro,
  actualizarRegistro,
  crearRegistro,
  eliminarRegistro,
} = require("../controller/controller.registro.locatario");

// ==========================================
// Rutas para renderizar las vistas de usuarios
// ==========================================
// router.get("/registros/", async (req, res) => {
//   return res.render("usuario/lista_usuarios");
// });

router.get("/registro/nuevo", async (req, res) => {
  return res.render("Registro Locatario/index");
});

// router.get("/usuario/editar/:userId", async (req, res) => {
//   return res.render("usuario/editar_usuario", { id: req.params.userId });
// });

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// Ruta para obtener los datos de UN solo usuario
router.get("/api/registro/:id", obtenerRegistro);

// Actualizar datos de un usuario
router.put("/api/registro/:id", actualizarRegistro);

// Nuevo usuario
router.post("/api/registro/", crearRegistro);

// Eliminar Usuario
router.delete("/api/registro/:id", eliminarRegistro);

module.exports = router;
