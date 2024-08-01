import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is missing");
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
});

export default sequelize;
