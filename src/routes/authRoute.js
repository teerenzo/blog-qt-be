import express from "express";

import validateSchema from "../middlewares/validationSchema.js";
import userSchema from "../utils/validation/userSchema.js";
import loginSchema from "../utils/validation/loginSchema.js";
import { loginUser, registerUser } from "../controllers/userController.js";
import { getPostsByUser } from "../controllers/blogController.js";
import protect from "../middlewares/protectRoute.js";

const routes = express.Router();

routes.post("/register", validateSchema(userSchema), registerUser);
routes.post("/login", validateSchema(loginSchema), loginUser);

export default routes;
