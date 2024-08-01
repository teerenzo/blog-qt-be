require("dotenv").config();

module.exports = {
  development: {
    username: `postgres`,
    password: `10NSN20ngu@`,
    database: "todo",
    host: "localhost",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {},
  production: {},
};
