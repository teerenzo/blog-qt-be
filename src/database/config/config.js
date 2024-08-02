const path = require("path");
const Env = require("node-env-file");

Env(path.join("./.env"));

console.log("DB_HOST:", process.env.DB_HOST);

module.exports = {
  development: {
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
    host: `${process.env.DB_HOST}`,
    dialect: "postgres",
    dialectOptions:
      process.env.NODE_ENV === "development"
        ? {}
        : {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
  },
  test: {},
  production: {},
};
