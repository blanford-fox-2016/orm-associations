'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    id: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.hasMany(models.Student),
        StudentTeacher.hasMany(models.Teacher)
      }
    }
  });
  return StudentTeacher;
};
