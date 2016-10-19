'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    nama: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true,
        isUnique: function(newemail, next) {
          Teacher.find({
            where: {email: newemail},
            attributes: ['id']
          }).done(function(err){
            if(err){
              return err;
            }
            next()
          })
        }}
    },
    phone: {
      type: DataTypes.STRING,
      validate: {isNumeric:true, len:[10, 17]}
    },
    student_id: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Student)
      },

      cek_assos: function(){
        Teacher.findAll({
        }).then((data) => {
          console.log(data)
        });
      }
      }

  });
  return Teacher;
};
