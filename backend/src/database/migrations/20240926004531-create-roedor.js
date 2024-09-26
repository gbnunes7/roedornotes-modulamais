'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roedores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      especie: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.STRING
      },
      habitat: {
        type: Sequelize.STRING
      },
      comportamento: {
        type: Sequelize.STRING
      },
      dieta: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roedores');
  }
};