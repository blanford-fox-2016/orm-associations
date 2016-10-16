'use strict';

module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
        type: DataTypes.STRING,
        validate: {
            isUnique: function(value, next) {

                students.find({
                    where: {email: value},
                    attributes: ['id']
                }).done(function(error, user) {

                        if (error)
                            // Some unexpected error occured with the find method.
                            return next(error);

                        if (user)
                          //console if email already exist
                            return next('Email address already in use!');
                        next();
                    });
            }
        }
      },
    phone: {
      type: DataTypes.STRING,
      validate : {
        isNumeric: true,
        len: [10,14]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        students.hasMany(models.relation);
          
      },
      get_name: function(name){
        students.findAll({
          where: {
            first_name:name
          }
        }).then(function(data, err){
          if(err){
            console.log(err);
          }else{
            for(let i = 0; i<data.length; i++){
              console.log(data[i].dataValues);
            }
          }
        })
      },
      get_age: function(input_age){
        students.findAll({
          where:{
            age: input_age
          }
        }).then(function(data, err){
          if(err){
            console.log(err);
          }else{
            for(let i = 0; i<data.length; i++){
              console.log(data[i].dataValues);
            }
          }
        })
      }
    }
  });
  return students;
};
