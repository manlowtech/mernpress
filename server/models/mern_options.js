'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mern_Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mern_Options.init({
   
    opt_name: {
      type: DataTypes.STRING
    },
    
    opt_value: {
      type: DataTypes.STRING
    },
    
    slug: {
      type: DataTypes.STRING
    },
    
    parent: {
      type: DataTypes.STRING
    },
    
    opt_content: {
      type: DataTypes.STRING
    },
  
  }, {
    sequelize,
    modelName: 'Mern_Options',
  });
  return Mern_Options;
};