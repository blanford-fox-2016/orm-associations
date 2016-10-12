'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'Teacher',
      'students_id',
      {
        type: Sequelize.STRING,
        references :{
            model : 'students',
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    ),

    return queryInterface.addColumn(
      'students',
      'teacher_id',
      {
        type: Sequelize.STRING,
        references :{
            model : 'Teacher',
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    )




  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Teacher','students_id'),
    return queryInterface.removeColumn('students','teacher_id')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
