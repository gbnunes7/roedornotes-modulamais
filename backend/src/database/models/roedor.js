'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roedor.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    status: DataTypes.STRING,
    habitat: DataTypes.STRING,
    comportamento: DataTypes.STRING,
    dieta: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roedor',
    tableName: 'roedores'
  });
  return Roedor;
};