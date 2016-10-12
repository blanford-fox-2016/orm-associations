'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        unique: true,
        isEmail: true
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
        Students.hasMany(models.Teachers)
        Students.belongsTo(models.Teachers)
      }
    }
  });
  return Students;
};
