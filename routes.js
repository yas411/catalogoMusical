const { Router } = require('express');
const Artista = require('./models/Artista');
const Disco = require('./models/Disco');
const artistaController = require('./controllers/artistaController');
const discoController = require('./controllers/discoController');

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index'); // Renderiza a página inicial
});
// Rotas para artistas
routes.get('/artistas', artistaController.index); // Listar artistas
routes.post('/adicionarArtista', artistaController.store); // Criar um novo artista e associá-lo a um disco
routes.get('/adicionarArtista', async (req, res) => {
  // A rota para o formulário de criação de artista precisa carregar discos
  const discos = await Disco.findAll();
  res.render('artistas/adicionar', { discos });
}); // Página de criação de artista
routes.get('/artistas/:idArtista/editar', async (req, res) => {
  const { idArtista } = req.params;
  const artista = await Artista.findByPk(idArtista);
  res.render('artistas/editar', { artista });
}); // Página de edição do artista
routes.post('/artistas/:idArtista', artistaController.update); // Atualizar artista
routes.post('/artistas/:idArtista', artistaController.destroy); // Deletar artista
routes.get('/artistas/buscar', artistaController.search);

// Rotas para discos
routes.get('/discos', discoController.index); // Listar discos
routes.post('/adicionarDiscos', discoController.store); // Criar um novo disco
routes.get('/discos/:idDisco/editar', async (req, res) => {
  const { idDisco } = req.params;
  const disco = await Disco.findByPk(idDisco);
  res.render('discos/editar', { disco });
}); // Página de edição do disco
routes.post('/discos/:idDisco', discoController.update); // Atualizar disco
routes.post('/discos/:idDisco', discoController.destroy); // Deletar disco
routes.get('/discos/buscar', discoController.search);

module.exports = routes;

