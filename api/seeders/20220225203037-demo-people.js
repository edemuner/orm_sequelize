'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('People', [
       {
        name: 'John Doe',
        active: false,
        email: 'john@jd.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
       name: 'Eduardo Demuner',
       active: true,
       email: 'eduner@server.com',
       role: 'student',
       createdAt: new Date(),
       updatedAt: new Date()
    },
      {
       name: 'Alice Alexandra Augusto Demuner',
       active: true,
       email: 'threealfa@zipmail.com.br',
       role: 'student',
       createdAt: new Date(),
       updatedAt: new Date()
    },
      {
       name: 'Atena',
       active: true,
       email: 'ath@ena.com',
       role: 'student',
       createdAt: new Date(),
       updatedAt: new Date()
    },
      {
       name: 'Eugenia',
       active: true,
       email: 'eugenia@schnauzers.com',
       role: 'professor',
       createdAt: new Date(),
       updatedAt: new Date()
    },
      {
       name: 'Minduim',
       active: false,
       email: 'duim@google.com',
       role: 'professor',
       createdAt: new Date(),
       updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('People', null, {});
  }
};
