'use strict';
let faker = require('faker')

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsTo(models.Teacher)
      },
      addStudent: function(name,age,email,phone,teacher_id){
        Student.create({
          name:name,
          age:age,
          email:email,
          phone:phone,
          teacher_id:teacher_id
        })
      }
    }
  });
  return Student;
};
