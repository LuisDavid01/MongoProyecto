/*
   Enrutamiento de los endpoints del api para Horarios
*/

const express = require('express');
const router  = express.Router();
const HorariosController = require('../controllers/HorariosController');


router.get('/Horarios/:id', HorariosController.getHorarios);
router.post('/Horarios', HorariosController.createHorarios);
router.put('/Horarios/:id', HorariosController.updateHorarios);
router.delete('/Horarios/:id', HorariosController.deleteHorarios);

module.exports = router;