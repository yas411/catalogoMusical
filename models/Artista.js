const { Model, DataTypes } = require('sequelize');

class Artista extends Model {
    static init(sequelize) {
        super.init(
            {
                idArtista: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                generoMusical: {
                    type: DataTypes.JSON,
                    allowNull: false,
                },
                idDisco: {
                    type: DataTypes.JSON,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: 'Artista',
                tableName: 'artistas',
                timestamps: true,
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Disco, { foreignKey: 'idArtista', as: 'artistaDiscos' });
      }
}

module.exports = Artista;
