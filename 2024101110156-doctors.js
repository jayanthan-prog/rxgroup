'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      working_at_id: {
        type: Sequelize.INTEGER,
         
      },
      speciality_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'medical_field__masters',
          key:'id'
        }
         
      },
      serving_from: {
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      address: {
        type: Sequelize.STRING
      },
      languages_known_id: {
        type: Sequelize.INTEGER,
         
         
      },
      about: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      created_by: {
        type: Sequelize.UUID
      },
      updated_by: {
        type: Sequelize.UUID
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      deleted_by: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  }
};