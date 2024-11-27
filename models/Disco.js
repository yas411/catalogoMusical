const { Model, DataTypes } = require('sequelize');

class Disco extends Model {
  static init(sequelize) {
    super.init(
      {
        idDisco: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        anoDeLancamento: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        capa: {
          type: DataTypes.BLOB,
          allowNull: false,
        },
        listaDeFaixas: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        idArtista: {
          type: DataTypes.INTEGER,
        }
      },
      {
        sequelize,
        modelName: 'Disco',
        tableName: 'discos',
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Artista, { foreignKey: 'idArtista', as: 'artistaDiscos' });
  }
}

module.exports = Disco;
