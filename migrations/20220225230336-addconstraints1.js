'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Reviews',{
      fields: ['restaurantID'],
      type: 'foreign key',
      name: 'reviews foreignKey',
      references: {
        table: 'restaurants',
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
