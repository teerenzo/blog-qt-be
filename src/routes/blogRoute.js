import express from "express";
import validateSchema from "../middlewares/validationSchema.js";
import blogSchema from "../utils/validation/blogSchema.js";
import {
  createPost,
  deletePost,
  getMyPosts,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/blogController.js";
import protect from "../middlewares/protectRoute.js";
import { addComment, removeComment } from "../controllers/commentController.js";
import commentSchema from "../utils/validation/commentSchema.js";
import upload from "../utils/multer.js";

const routes = express.Router();

routes.post(
  "/",
  protect,
  upload.array("files", 1),
  validateSchema(blogSchema),
  createPost
);

routes.get("/", getPosts);

routes.get("/:id", getPostById);

routes.put(
  "/:id",
  protect,
  upload.array("files", 1),
  validateSchema(blogSchema),
  updatePost
);

routes.delete("/:id", protect, deletePost);

//get  my posts
routes.get("/user/my-blogs", protect, getMyPosts);

// comment
routes.post("/:id/comment", protect, addComment);

// delete comment
routes.delete(
  "/:id/comment/:commentId",
  protect,
  validateSchema(commentSchema),
  removeComment
);

export default routes;
