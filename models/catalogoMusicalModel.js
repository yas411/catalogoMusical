const listaDeFaixas = [
    {
        id: 1, titulo: 'The Tortured Poets Department'
    }
];

const catalogo = [
    { id: 1, titulo: 'The Tortured Poets Department', anoDeLancamento: 2024, capa: capa, listaDeFaixas: listaDeFaixas}
];

const getCatalogos = () => catalogos;
const getCatalogoById = (id) => catalogos.find(c => c.id === parseInt(id));

const getAdicionarCatalogo = () => catalogos;

const createCatalogo = (nome, tipo) => {
    const newCatalogo = {
        id: catalogos.length + 1,
        titulo: titulo,
        anoDeLancamento: anoDeLancamento,
        capa: capa,
        listaDeFaixas: listaDeFaixas
    };
    catalogos.push(newCatalogo);
};

module.exports = {
    getCatalogos,
    getCatalogoById,
    getAdicionarCatalogo,
    createCatalogo
};