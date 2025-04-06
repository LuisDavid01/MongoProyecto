/*
   Enrutamiento de los endpoints del api para EventosEspeciales
*/

const express = require('express');
const router  = express.Router();
const EventosEspecialesController = require('../controllers/EventosEspecialesController');


router.get('/EventosEspeciales/:id', EventosEspecialesController.getEventosEspeciales);
router.post('/EventosEspeciales', EventosEspecialesController.createEventosEspeciales);
router.put('/EventosEspeciales/:id', EventosEspecialesController.updateEventosEspeciales);
router.delete('/EventosEspeciales/:id', EventosEspecialesController.deleteEventosEspeciales);

module.exports = router;