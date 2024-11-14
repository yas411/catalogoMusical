const express = require('express');
const router = express.Router();
const artistaController = require('../controllers/artistaController');

router.get('/artistas', artistaController.getAllArtistas); 
router.get('/artista/:id', artistaController.getArtista);
router.get('/adicionarArtista', artistaController.getAdicionarArtistas);
router.post('/adicionarArtista', artistaController.createArtistas);


module.exports = router;