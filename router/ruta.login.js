const express = require("express");
const { login } = require("../controller/contr.login");
// const jwt = require("jsonwebtoken");
const router = require("express").Router();

// =====================================================
// Rutas para renderizar las vistas de login y registro
// =====================================================

router.get("/login_locatario", (req, res) =>
  res.render("auth/inicio_seccion/como_locatario/login")
);

// =====================================================
//         Rutas para autenticar y registrar usuarios
// =====================================================

router.post("/api/login_locatario", login);

// // ruta para validar el token
// router.get("/api/validar-token", (req, res) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.redirect("/login_locatario");
//   }

//   const isValidToken = jwt.verify(token, process.env.SECRET_KEY);

//   if (!isValidToken) {
//     return res.redirect("/login_locatario");
//   }

//   return res.json({ ok: true });
// });

module.exports = router;
