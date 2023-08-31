const router = require("express").Router();
//index
router.get("/", (req, res) => {
  res.render("index");
});

//alquileres
router.get("/alquileres", (req, res) => {
  res.render("alquiler/alquilar");
});

//publicar
router.get("/publicar", (req, res) => {
  res.render("publicar/publicar");
});

//locador REGISTRO
router.get("/registro_locador", async (req, res) => {
  return res.render("auth/Registro de Locatario/index");
});
module.exports = router;
