const express = require('express');
const router = express.Router();
const ResenasController = require('../controllers/ResenasController');

router.get('/Resenas/:id', ResenasController.getResena);
router.post('/Resenas', ResenasController.createResena);
router.put('/Resenas/:id', ResenasController.updateResena);
router.delete('/Resenas/:id', ResenasController.deleteResena);

module.exports = router;
