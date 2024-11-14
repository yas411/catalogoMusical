const catalogoMusicalModel = require('../models/catalogoMusicalModel');

const getAllCatalogos = (req, res) => {
    const catalogos = catalogoMusicalModel.getCatalogos();
    res.render('index', { catalogos });
};

const getCatalogo = (req, res) => {
    const catalogo = catalogoMusicalModel.getCatalogoById(req.params.id);
    if (catalogo) {
        res.render('catalogo', { catalogo });
    } else {
        res.status(404).send('Catálogo não encontrado');
    }
};

const getAdicionarCatalogos = (req, res) => {
    res.render('adicionarCatalogo');
}

const createCatalogos = (req, res) => {
    catalogoMusicalModel.createCatalogo(req.body.tipo, req.body.anoDeLancamento, req.body.capa, req.body.listaDeFaixas);
    res.redirect('/');
}

module.exports = {
    getAllCatalogos,
    getCatalogo,
    getAdicionarCatalogos,
    createCatalogos
};