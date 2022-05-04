const config = require('../config.js').password_encryption;
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        id: 'admin',
        username: 'Admin',
        email: 'admin@test.com',
        password: 'admin',
      },
      {
        id: 'pedro',
        username: 'pedro',
        email: 'pedro@test.com',
        password: 'pedro',
      },
      {
        id: 'luis',
        username: 'luis',
        email: 'luis@test.com',
        password: 'luis',
      },
      {
        id: 'ana',
        username: 'ana',
        email: 'ana@test.com',
        password: 'ana',
      },
      {
        id: 'luisa',
        username: 'luisa',
        email: 'luisa@test.com',
        password: 'luisa',
      },
      {
        id: 'andres',
        username: 'andres',
        email: 'andres@test.com',
        password: 'andres',
      },
      {
        id: 'alex',
        username: 'alex',
        email: 'alex@test.com',
        password: 'alex',
      },
      {
        id: 'roberto',
        username: 'roberto',
        email: 'roberto@test.com',
        password: 'roberto',
      },
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  },
};
