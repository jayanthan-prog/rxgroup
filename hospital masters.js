'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hospital_masters', [
      {
        name: 'City General Hospital',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Downtown Medical Center',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Uptown Community Hospital',
        is_active: false, // Example of a hospital that is not active
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suburban Health Clinic',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more hospitals as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hospital_masters', null, {});
  }
};
