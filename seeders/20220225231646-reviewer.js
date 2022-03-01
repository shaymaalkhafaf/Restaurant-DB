'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviewers",
      [
        {
          name: "Annie",
          email: "Annie@email.com",
          karma: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zaphod",
          email: "Zaphod@email.com",
          karma: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
    

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("reviewers", null, {});

  }
};
