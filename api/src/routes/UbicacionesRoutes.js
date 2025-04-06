/*
   Enrutamiento de los endpoints del api para Ubicaciones
*/

const express = require('express');
const router  = express.Router();
const UbicacionesController = require('../controllers/UbicacionesController');


router.get('/Ubicaciones/:id', UbicacionesController.getUbicaciones);
router.post('/Ubicaciones', UbicacionesController.createUbicaciones);
router.put('/Ubicaciones/:id', UbicacionesController.updateUbicaciones);
router.delete('/Ubicaciones/:id', UbicacionesController.deleteUbicaciones);

module.exports = router;