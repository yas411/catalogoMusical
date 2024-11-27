const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Artista = require('../models/Artista');
const Disco = require('../models/Disco');

const connection = new Sequelize(dbConfig); 

Artista.init(connection);
Disco.init(connection);

Artista.associate?.(connection.models);
Disco.associate?.(connection.models);

module.exports = connection;

