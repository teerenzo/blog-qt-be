import {
  createPost as createPostService,
  getPosts as getPostsService,
  getPostById as getPostByIdService,
  updatePost as updatePostService,
  deletePost as deletePostService,
} from "../services/blogService.js";

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const userId = req.user.id;
    const newPost = await createPostService({ title, content, userId });
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
      message: "Posts fetched successfully",
      data: posts,
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
