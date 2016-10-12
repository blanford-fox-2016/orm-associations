'use strict';

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Teacher.hasMany(models.Student)
      },
      addTeacher: function(name,email){
        Teacher.create({
          name:name,
          email:email
        })
      }
    }
  })
  return Teacher;
}
