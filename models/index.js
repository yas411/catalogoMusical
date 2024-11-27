const Sequelize = require('sequelize');
const config = require('../config/config.json'); 

const sequelize = new Sequelize(config.development);

const models = {
  Disco: require('./Disco').init(sequelize),
  Artista: require('./Artista').init(sequelize),
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
