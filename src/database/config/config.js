const env = require("../../utils/env");

require("dotenv").config();

console.log(env.DB_USERNAME);
console.log(env.DB_PASSWORD);
console.log(env.DB_DATABASE);
console.log(env.DB_HOST);

module.exports = {
  development: {
    username: `postgres`,
    password: `10NSN20ngu@`,
    database: "todo",
    host: "localhost",
    dialect: "postgres",
  },
  test: {},
  production: {},
};
