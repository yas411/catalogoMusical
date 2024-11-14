const catalogoMusicalModel = require('../models/catalogoMusicalModel');

const getAllAlbuns = (req, res) => {
    const albuns = catalogoMusicalModel.getAlbuns();
    res.render('index', { albuns });
};

const getAlbum = (req, res) => {
    const album = catalogoMusicalModel.getAlbumById(req.params.id);
    if (album) {
        res.render('album', { album });
    } else {
        res.status(404).send('Álbum não encontrado');
    }
};

const getAdicionarAlbuns = (req, res) => {
    res.render('adicionarAlbum');
}

const createAlbuns = (req, res) => {
    catalogoMusicalModel.createAlbum(req.body.titulo, req.body.artista, req.body.anoDeLancamento, req.body.capa, req.body.listaDeFaixas);
    res.redirect('/');
}

module.exports = {
    getAllAlbuns,
    getAlbum,
    getAdicionarAlbuns,
    createAlbuns
};