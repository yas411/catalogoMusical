const express = require('express');
const router = express.Router();
const catalogoMusicalController = require('../controllers/catalogoMusicalController');

router.get('/', catalogoMusicalController.getAllCatalogos); 
router.get('/catalogo/:id', catalogoMusicalController.getCatalogo);
router.get('/adicionarCatalogo', catalogoMusicalController.getAdicionarCatalogos);
router.post('/adicionarCatalogo', catalogoMusicalController.createCatalogos);


module.exports = router;