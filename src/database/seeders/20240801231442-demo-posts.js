"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "First Blog Post",
          content: "This is the content of the first blog post.",
          userId: 1,
          imageUrl:
            "http://res.cloudinary.com/dnipqs2mh/image/upload/v1722548992/blogs/rbp089t8323dpykmmjgz.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second Blog Post",
          content: "This is the content of the second blog post.",
          userId: 2,
          imageUrl:
            "http://res.cloudinary.com/dnipqs2mh/image/upload/v1722548992/blogs/rbp089t8323dpykmmjgz.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
