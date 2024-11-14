const express = require('express');
const router = express.Router();
const catalogoMusicalController = require('../controllers/catalogoMusicalController');

router.get('/', catalogoMusicalController.getAllAlbuns); 
router.get('/album/:id', catalogoMusicalController.getAlbum);
router.get('/adicionarAlbum', catalogoMusicalController.getAdicionarAlbuns);
router.post('/adicionarAlbum', catalogoMusicalController.createAlbuns);

module.exports = router;