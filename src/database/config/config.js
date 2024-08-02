const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

const envPath = path.resolve("./.env");
console.log("Loading environment variables from:", envPath);

if (fs.existsSync(envPath)) {
  console.log(".env file exists at", envPath);
  dotenv.config({ path: envPath });
} else {
  console.error(".env file does not exist at", envPath);
}

// Output an environment variable to confirm loading
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
