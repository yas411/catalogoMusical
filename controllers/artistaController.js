const Artista = require('../models/Artista');
const Disco = require('../models/Disco');

module.exports = {
  async store(req, res){
    const { nome, generoMusical, idDisco } = req.body

    const disco = await Disco.findByPk(idDisco);
    if (!disco) {
      return res.status(404).json({ error: "Disco não encontrado" });
    }

    const artista = await Artista.create({
      nome,
      generoMusical,
      idDisco: disco.idDisco,
    });

    return res.json(artista);
  },

  async index(req, res) {
    const artistas = await Artista.findAll({
    include: [{
      model: Disco,
      as: 'artistaDiscos', 
      attributes: ['titulo', 'anoDeLancamento'] 
    }]
   });

  res.render('artistas/index', { artistas });
},

  async update(req, res){
    const { idArtista } = req.params;

    await Artista.update(req.body, {
      where: { idArtista }
    })

    const artista = await Artista.findByPk(idArtista)

    return res.json(artista)
  },

  async destroy(req, res) {
    const { idArtista } = req.params;
    await Artista.destroy({ where: { idArtista } });
    return res.redirect('/artistas');
},

  async search(req, res) {
    const { nome, generoMusical } = req.query;
    
    const artistas = await Artista.findAll({
      where: {
        nome: nome ? { [Op.iLike]: `%${nome}%` } : undefined,
        generoMusical: generoMusical ? { [Op.iLike]: `%${generoMusical}%` } : undefined,
      },
      include: {
        model: Disco,
        as: 'artistaDiscos',
        attributes: ['titulo', 'anoDeLancamento']
      }
    });

    res.render('artistas/index', { artistas });
  }
}