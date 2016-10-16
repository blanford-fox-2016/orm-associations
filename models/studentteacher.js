'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    teacherId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentTeacher;
};
