'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsTo(models.StudentTeacher)
      }
    }
  });
  return Student;
};
