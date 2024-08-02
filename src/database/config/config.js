const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

const envPath = path.resolve("./.env");

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

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
  production: {
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
    host: `${process.env.DB_HOST}`,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
