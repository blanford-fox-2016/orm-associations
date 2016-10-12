'use strict';
var Sequelize = require('sequelize');
require('sequelize-isunique-validator')(Sequelize)

module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique: sequelize.validateIsUnique('email')
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate:{
        isAlphanumeric:true,
        len:[10,12]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teachers.hasMany(models.Students);
        Teachers.belongsTo(models.Students);
      }
    }
  });
  return Teachers;
};
