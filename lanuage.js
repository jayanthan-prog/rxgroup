'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('language_masters', [
      {
        name: 'English',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Spanish',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'French',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mandarin',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'German',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more languages as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('language_masters', null, {});
  }
};
