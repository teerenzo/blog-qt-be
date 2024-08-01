"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Should I become a technology specialist or generalist?",
          content:
            "Wondering if you should become a tech specialist or generalist, or something in between? In this article, we break down the pros and cons of both, how these might impact your salary and career options, and how to take your career in these directions. If you're more of a watcher than a reader",
          userId: 1,
          imageUrl:
            "http://res.cloudinary.com/dnipqs2mh/image/upload/v1722548992/blogs/rbp089t8323dpykmmjgz.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How to help engineers make time for on-the-job training",
          content:
            "It’s a tale as old as time: Engineers are too busy to do, well, much of anything beyond their main responsibilities. That includes learning new technical skills.",
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
