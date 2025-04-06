/*
   Enrutamiento de los endpoints del api para Contactos
*/

const express = require('express');
const router  = express.Router();
const ContactosController = require('../controllers/ContactosController');


router.get('/Contactos/:id', ContactosController.getContactos);
router.post('/Contactos', ContactosController.createContactos);
router.put('/Contactos/:id', ContactosController.updateContactos);
router.delete('/Contactos/:id', ContactosController.deleteContactos);

module.exports = router;