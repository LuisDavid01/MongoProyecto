const express = require('express');
const router  = express.Router();
const UsuariosController = require('../controllers/UsuariosController');


router.get('/Usuarios/:id', UsuariosController.getUsuarios);
router.post('/Usuarios', UsuariosController.createUsuarios);
router.put('/Usuarios/:id', UsuariosController.updateUsuarios);
router.delete('/Usuarios/:id', UsuariosController.deleteUsuarios);

module.exports = router;