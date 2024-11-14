const listaDeFaixas = ["faixa1", "faixa2", "faixa3"];

const albuns = [
    { id: 1, titulo: 'The Tortured Poets Department', artista: "Taylor Swift", anoDeLancamento: 2024, capa: "caminho/para/a/imagem.jpg", listaDeFaixas: listaDeFaixas}
];

const getAlbuns = () => albuns;
const getAlbumById = (id) => albuns.find(c => c.id === parseInt(id));

const getAdicionarAlbum = () => albuns;

const createAlbum = (titulo, artista, anoDeLancamento, capa, listaDeFaixas) => {
    const newAlbum = {
        id: albuns.length + 1,
        titulo: titulo,
        artista: artista,
        anoDeLancamento: anoDeLancamento,
        capa: capa,
        listaDeFaixas: listaDeFaixas
    };
    albuns.push(newAlbum);
};

module.exports = {
    getAlbuns,
    getAlbumById,
    getAdicionarAlbum,
    createAlbum
};