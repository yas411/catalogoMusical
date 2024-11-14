const artistaModel = require('../models/artistaModel');

const getAllArtistas = (req, res) => {
    const artistas = artistaModel.getArtistas();
    res.render('artistas', { artistas });
};

const getArtista = (req, res) => {
    const artista = artistaModel.getArtistaById(req.params.id);
    if (artista) {
        res.render('artista', { artista });
    } else {
        res.status(404).send('Artista não encontrado');
    }
};

const getAdicionarArtistas = (req, res) => {
    res.render('adicionarArtista');
}

const createArtistas = (req, res) => {
    artistaModel.createArtistas(req.body.nome);
    res.redirect('/artistas');
}

module.exports = {
    getAllArtistas,
    getArtista,
    getAdicionarArtistas,
    createArtistas
};