'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Config.init({
    name: {
    type:   DataTypes.STRING
       },
    
    role: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
  },

   {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};