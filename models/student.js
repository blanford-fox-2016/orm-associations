'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsToMany(models.Teacher, {
          through: 'StudentTeacher'
        })
      }
    }
  });
  return Student;
};
