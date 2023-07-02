const router = require("express").Router();

//alquileres
router.get("/alquileres", (req, res) => {
  res.render("alquiler/alquilar");
});

module.exports = router;
