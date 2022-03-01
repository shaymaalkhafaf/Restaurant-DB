'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Reviews',{
      fields: ['reviewerID'],
      type: 'foreign key',
      name: 'any name',
      references: {
        table: 'reviewers',
        field: 'id'
      },
      onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

    }
    )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');

  }
};
