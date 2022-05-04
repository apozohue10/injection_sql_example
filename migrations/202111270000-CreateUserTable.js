module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user',
      {
        id: {
          type: Sequelize.STRING(36), //Sequelize.UUID,
          primaryKey: true,
          unique: true
        },
        username: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        sync: { force: true },
      }
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  },
};
