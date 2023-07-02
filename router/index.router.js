const router = require("express").Router();
//index
router.get("/", (req, res) => {
  res.render("index");
});

//alquileres
router.get("/alquileres", (req, res) => {
  res.render("alquiler/alquilar");
});

module.exports = router;
