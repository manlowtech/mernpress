'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    name: {
      type:DataTypes.STRING
    },
    
    email: {
      type: DataTypes.STRING
    },
    
    username: {
      type: DataTypes.STRING
    },
    
    password: {
      type: DataTypes.STRING
    },
    
    role: {
      type: DataTypes.STRING
    },
    
    status: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};