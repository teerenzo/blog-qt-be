"use strict";
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "emmanuel",
          lastName: "renzaho",
          email: "test@example.com",
          password: hashPassword("1234567"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "kalisa",
          lastName: "John",
          email: "test2@example.com",
          password: hashPassword("1234567"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
