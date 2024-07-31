import express from "express";
import validateSchema from "../middlewares/validationSchema.js";
import postSchema from "../utils/validation/postSchema.js";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/blogController.js";
import protect from "../middlewares/protectRoute.js";

const routes = express.Router();

routes.post("/", protect, validateSchema(postSchema), createPost);

routes.get("/", getPosts);

routes.get("/:id", getPostById);

routes.put("/:id", protect, validateSchema(postSchema), updatePost);

routes.delete("/:id", protect, deletePost);

export default routes;
