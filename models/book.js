/*this is the Book model, the attributes here have the same name
as the columns from the Books table from "library.db"*/

'use strict';
module.exports = (sequelize, DataTypes) => { 
  const Book = sequelize.define('Book', { //Starting with Sequelize 4.0, class and instance methods are no longer defined via the sequelize.define() method. Instead, you add them to the ES2015 class that's returned by the sequelize.define() method
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
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};