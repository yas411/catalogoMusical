const artistas = [
    { id: 1, nome: 'Taylor Swift'}
];

const getArtistas = () => artistas;
const getArtistaById = (id) => artistas.find(a => a.id === parseInt(id));

const getAdicionarArtista = () => artistas;

const createArtista = (nome) => {
    const newArtista = {
        id: artistas.length + 1,
        nome: nome
    };
    artistas.push(newArtista);
};

module.exports = {
    getArtistas,
    getArtistaById,
    getAdicionarArtista,
    createArtista
};