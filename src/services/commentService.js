import { Comment } from "../database/models";

export const createComment = async (data) => {
  try {
    const newComment = await Comment.create(data);
    return newComment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteComment = async (commentId, user) => {
  try {
    const comment = await Comment.findOne({ where: { id: commentId } });

    if (!comment) {
      throw new Error("Comment not found");
    }

    await comment.destroy();
    return comment;
  } catch (error) {
    throw error;
  }
};
