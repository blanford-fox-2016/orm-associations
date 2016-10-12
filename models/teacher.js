'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      isUnique: true,
      validate: {
        isEmail: true,
        isUnique: sequelize.validateIsUnique('email')
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,

        },
        len: {
          args: [10,15],
          msg: "nomor telepon harus antara 10-15"
        }

      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsTo(models.StudentTeacher)
      }
    }
  });
  return Teacher;
};
