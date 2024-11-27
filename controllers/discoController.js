const Disco = require('../models/Disco');

module.exports = {
  async store(req, res){
    const { titulo, anoDeLancamento, capa, listaDeFaixas, artista} = req.body

    const disco = await Disco.create({titulo, anoDeLancamento, capa, listaDeFaixas, artista})

    return res.json(disco);
  },

  async index(req, res) {
    const discos = await Disco.findAll({
      include: {
        model: Artista,
        as: 'artistaDiscos', 
        attributes: ['nome'] 
      }
    });

    res.render('discos/index', { discos });
  },

  async update(req, res){
    const { idDisco } = req.params;

    await Disco.update(req.body, {
      where: { idDisco }
    })

    const disco = await Disco.findByPk(idDisco)

    return res.json(disco)
  },

  async destroy(req, res) {
    const { idDisco } = req.params;
    await Disco.destroy({ where: { idDisco } });
    return res.redirect('/discos');
},

  async search(req, res) {
    const { titulo, anoDeLancamento, artistaId } = req.query;
    
    const discos = await Disco.findAll({
      where: {
        titulo: titulo ? { [Op.iLike]: `%${titulo}%` } : undefined,
        anoDeLancamento: anoDeLancamento ? anoDeLancamento : undefined,
        idArtista: artistaId ? artistaId : undefined,
      }
    });

    res.render('discos/index', { discos });
  },
}

