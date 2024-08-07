

const { Post } = require("../database/models");
const { User, Comment } = require("../database/models");


export const createPost = async (data) => {
  try {
    const newPost = await Post.create(data);
    if (!newPost) {
      throw new Error("Something went wrong");
    }
    return newPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getPosts = async () => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: "author",
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
          as: "comments",
          attributes: ["id", "content"],
          include: [
            {
              model: User,
              as: "author",
              attributes: { exclude: ["password"] },
            },
          ],
        },
      ],
    });
    if (!posts) {
      throw new Error("No posts found");
    }
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getPostById = async (postId) => {
  try {
    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          as: "author",
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
          as: "comments",
          attributes: ["id", "content"],
          include: [
            {
              model: User,
              as: "author",
              attributes: { exclude: ["password"] },
            },
          ],
        },
      ],
    });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const updatePost = async (postId, data, userId) => {
  try {
    const post = await Post.findOne({ where: { id: postId, userId } });
    if (!post) {
      throw new Error("Post not found or unauthorized");
    }
    const [updated] = await Post.update(data, {
      where: { id: postId },
    });
    if (!updated) {
      throw new Error("Post not found or not updated");
    }
    const updatedPost = await Post.findByPk(postId);
    return updatedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const deletePost = async (postId, userId) => {
  try {
    const post = await Post.findOne({ where: { id: postId, userId } });
    if (!post) {
      throw new Error("Post not found or unauthorized");
    }
    const deleted = await Post.destroy({
      where: { id: postId },
    });
    return { message: "Post deleted successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPostsByUser = async (userId) => {
  try {
    const posts = await Post.findAll({
      where: { userId },
      include: [
        {
          model: User,
          as: "author",
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
          as: "comments",
          attributes: ["id", "content"],
          include: [
            {
              model: User,
              as: "author",
              attributes: { exclude: ["password"] },
            },
          ],
        },
      ],
    });
    if (!posts) {
      throw new Error("No posts found");
    }
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
