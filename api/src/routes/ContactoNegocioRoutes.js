/*
   Enrutamiento de los endpoints del api para ContactoNegocio
*/

const express = require('express');
const router  = express.Router();
const ContactoNegocioController = require('../controllers/ContactoNegocioController');


router.get('/ContactoNegocio/:id', ContactoNegocioController.getContactoNegocio);
router.post('/ContactoNegocio', ContactoNegocioController.createContactoNegocio);
router.put('/ContactoNegocio/:id', ContactoNegocioController.updateContactoNegocio);
router.delete('/ContactoNegocio/:id', ContactoNegocioController.deleteContactoNegocio);

module.exports = router;