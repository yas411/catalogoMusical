const catalogoMusicalModel = require('../models/catalogoMusicalModel');

const getAllCatalogos = (req, res) => {
    const catalogos = catalogoMusicalModel.getAllCatalogos();
    res.render('index', { catalogos });
};

const getCatalogo = (req, res) => {
    const catalogo = catalogoMusicalModel.getCatalogoById(req.params.id);
    if (catalogo) {
        res.render('catalogo', { pokemon });
    } else {
        res.status(404).send('Catálogo não encontrado');
    }
};

const getAdicionarCatalogos = (req, res) => {
    res.render('adicionarCatalogo');
}

const createCatalogos = (req, res) => {
    catalogoMusicalModel.createCatalogos(req.body.nome, req.body.tipo);
    res.redirect('/');
}

module.exports = {
    getAllCatalogos,
    getCatalogo,
    getAdicionarCatalogos,
    createCatalogos
};