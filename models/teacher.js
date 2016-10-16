'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
            isUnique: function(value, next) {

                Teacher.find({
                    where: {email: value},
                    attributes: ['id']
                }).done(function(error, user) {

                        if (error)
                            // Some unexpected error occured with the find method.
                            return next(error);

                        if (user)
                            // We found a user with this email address.
                            // Pass the error to the next method.
                            return next('Email address already in use!');

                        // If we got this far, the email address hasn't been used yet.
                        // Call next with no arguments when validation is successful.
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
      Teacher.hasMany(models.relation);
      Teacher.belongsTo(models.students);

      }
    }
  });
  return Teacher;
};
