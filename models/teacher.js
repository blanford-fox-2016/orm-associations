'use strict';
var Sequelize = require('sequelize');
require('sequelize-isunique-validator')(Sequelize);

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
          args: true,
          msg: "Email Input Wrong !"
      },
      validate: {
        isUnique: sequelize.validateIsUnique('email')
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student,  {
          through: 'StudentTeacher'
        })
      }
    }
  });
  return Teacher;
};
