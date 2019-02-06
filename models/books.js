'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Must have a title!"
        }
      }
    }, 
    author:{
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "The author's name is needed!"
        }
      }
    },
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};