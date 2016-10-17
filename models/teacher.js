'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: isUnique("Teacher", "email")
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
        len: [10, 13]
      }
    }
  } , {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student, {through: 'StudentTeacher', foreignKey: 'TeacherId'});
      }
    }
  });
  return Teacher;
};

function isUnique(modelName, field) {
  return function(value, next) {
    var Model = require("./")[modelName];
    var query = {};
    query[field] = value;
    Model.find({where: query, attributes: ["id"]}).then(function(obj) {
      if (obj) {
        next(field + ' "' + value + '" is already in use');
      } else {
        next();
      }
    });
  };
}
