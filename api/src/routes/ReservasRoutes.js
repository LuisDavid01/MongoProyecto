const express = require('express');
const router = express.Router();
const ReservasController = require('../controllers/ReservasController');

router.get('/Reservas/:id', ReservasController.getReserva);
router.post('/Reservas', ReservasController.createReserva);
router.put('/Reservas/:id', ReservasController.updateReserva);
router.delete('/Reservas/:id', ReservasController.deleteReserva);

module.exports = router;
