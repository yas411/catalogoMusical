'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('discos', {
      idDisco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anoDeLancamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listaDeFaixas: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      idArtista: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'artistas',  
          key: 'idArtista',
        },
        onDelete: 'SET NULL', 
        onUpdate: 'CASCADE',  
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('discos');
  }
};
