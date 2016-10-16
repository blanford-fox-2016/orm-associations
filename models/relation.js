'use strict';
module.exports = function(sequelize, DataTypes) {
  var relation = sequelize.define('relation', {
    students_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        relation.belongsTo(models.students);
        relation.belongsTo(models.Teacher); 
        // associations can be defined here
      }
    }
  });
  return relation;
};
