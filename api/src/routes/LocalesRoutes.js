/*
   Enrutamiento de los endpoints del api para Locales
*/

const express = require('express');
const router  = express.Router();
const LocalesController = require('../controllers/LocalesController');


router.get('/Locales/:id', LocalesController.getLocales);
router.post('/Locales', LocalesController.createLocales);
router.put('/Locales/:id', LocalesController.updateLocales);
router.delete('/Locales/:id', LocalesController.deleteLocales);

module.exports = router;