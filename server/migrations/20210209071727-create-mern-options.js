'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mern_Options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      opt_name: {
        type: Sequelize.STRING
      },
      
      opt_value: {
        type: Sequelize.STRING
      },
      
      slug: {
        type: Sequelize.STRING
      },
      
      parent: {
        type: Sequelize.STRING
      },
      
      opt_content: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mern_Options');
  }
};