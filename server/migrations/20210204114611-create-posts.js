'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_category: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mime_type: {
        allowNull: true,
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};