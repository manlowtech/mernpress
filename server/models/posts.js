'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    title:  {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    author: {
      allowNull: true,
      type: DataTypes.STRING
    },
    post_content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    post_type: {
      allowNull: true,
      type: DataTypes.STRING
    },
    post_status: {
      allowNull: true,
      type: DataTypes.STRING
    },
    post_category: {
      allowNull: true,
      type: DataTypes.STRING
    },
    mime_type: {
      allowNull: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};