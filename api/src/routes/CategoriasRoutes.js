/*
   Enrutamiento de los endpoints del api para Categorias
*/

const express = require('express');
const router  = express.Router();
const CategoriasController = require('../controllers/CategoriasController');


router.get('/Categorias/:id', CategoriasController.getCategorias);
router.post('/Categorias', CategoriasController.createCategorias);
router.put('/Categorias/:id', CategoriasController.updateCategorias);
router.delete('/Categorias/:id', CategoriasController.deleteCategorias);
router.get('/Categorias/buscar/:Nombre', CategoriasController.getPorNombreCategorias);

module.exports = router;