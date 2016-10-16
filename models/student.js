'use strict'
// let faker = require('faker')

module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Student.belongsToMany(models.Teacher, {through: 'StudentTeacher', foreignKey: 'StudentId'})
      },
      addStudent: function (name, age, email, phone, TeacherId) {
        Student.create({
          name: name,
          age: age,
          email: email,
          phone: phone,
          TeacherId: TeacherId
        })
      }
    }
  }, {
    underscored: true
  },
    {
      getterMethods:
    { nameEmailPhone: function () { return `${this.name} || ${this.email} || ${this.phone}` } }
    }
)
  return Student
}
