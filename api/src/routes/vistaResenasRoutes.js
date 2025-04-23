const express = require('express');
const router = express.Router();
const VistaResenasController = require('../controllers/VistaResenasController');

// Ruta para obtener las vistas de resenas (total por local)
router.get('/vista-resenas', VistaResenasController.getVistaResenas);

// Ruta para actualizar la vista materializada
router.post('/actualizar-vista', VistaResenasController.actualizarVistaMaterializada);

module.exports = router;
