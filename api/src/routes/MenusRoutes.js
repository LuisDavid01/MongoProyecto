/*
   Enrutamiento de los endpoints del api para Menus
*/

const express = require('express');
const router  = express.Router();
const MenusController = require('../controllers/MenusController');


router.get('/Menus/:id', MenusController.getMenus);
router.post('/Menus', MenusController.createMenus);
router.put('/Menus/:id', MenusController.updateMenus);
router.delete('/Menus/:id', MenusController.deleteMenus);

module.exports = router;