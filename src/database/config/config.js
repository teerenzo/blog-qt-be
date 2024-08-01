module.exports = {
  development: {
    username: "myBlog_owner",
    password: "4Xr1QRYwieaz",
    database: "myBlog",
    host: "ep-cool-surf-a50w7c16.us-east-2.aws.neon.tech",
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
