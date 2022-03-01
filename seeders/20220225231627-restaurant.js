'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "In N Out",
          address: "Houston,Tx",
          category: "junk food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sushi restaurant",
          address: "7th street",
          category: "Seafood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("restaurants", null, {});
  },
  
};
