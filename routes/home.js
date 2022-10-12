const express = require('express');
const { leerMensaje, agregarMensaje, eliminarMensaje, editarMensaje, editarMensajeForm } = require('../controllers/homeController');
const router = express.Router();

const {} = require

router.get("/", leerMensaje);
router.post("/", agregarMensaje);
router.get("/eliminar/:id", eliminarMensaje);
router.get("/editar/:id", editarMensajeForm);
router.post("/editar/:id", editarMensaje);

module.exports = router;