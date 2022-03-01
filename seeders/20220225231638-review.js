'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          stars: 5,
          title: "review-title",
          review: "So good",
          restaurantID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          stars: 5,
          title: "review-title",
          review: "So good",
          restaurantID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
    

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
  
};
