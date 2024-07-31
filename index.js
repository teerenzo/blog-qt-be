import express from "express";
import routes from "./src/routes/index.js";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.js";
import cors from "cors";
import sequelize from "./src/config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerDocument);

app.use("/api/v1", routes);

app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log("Database connected successfully");
  console.log(`Server is running on port ${PORT}`);
});
