/*
   Enrutamiento de los endpoints del api para Fotos
*/

const express = require('express');
const router  = express.Router();
const FotosController = require('../controllers/FotosController');


router.get('/Fotos/:id', FotosController.getFotos);
router.post('/Fotos', FotosController.createFotos);
router.put('/Fotos/:id', FotosController.updateFotos);
router.delete('/Fotos/:id', FotosController.deleteFotos);

module.exports = router;