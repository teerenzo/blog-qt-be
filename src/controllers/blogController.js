import {
  createPost as createPostService,
  getPosts as getPostsService,
  getPostById as getPostByIdService,
  updatePost as updatePostService,
  deletePost as deletePostService,
  getPostsByUser,
} from "../services/blogService.js";
import { fileUploader } from "../utils/uploadImage.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);
  console.log(req.files);

  try {
    if (!req.files) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide package cover image",
      });
    }
    const uploadFile = await fileUploader(req);

    console.log(uploadFile);

    const userId = req.user.id;
    const newPost = await createPostService({
      title,
      content,
      userId,
      imageUrl: uploadFile.url,
    });
    res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostsService();
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getPostByIdService(id);
    res.status(200).json({
      message: "Post fetched successfully",
      data: post,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;
  try {
    const updatedPost = await updatePostService(
      id,
      { title, content, userId },
      req.user.id
    );

    res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;
  try {
    const result = await deletePostService(id, req.user.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const posts = await getPostsByUser(req.user.id);
    console.log(posts);
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
