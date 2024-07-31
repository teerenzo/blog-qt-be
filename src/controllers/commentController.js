import {
  createComment,
  getCommentById,
  deleteComment,
} from "../services/commentService.js";

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const userId = req.user.id;
  try {
    const newComment = await createComment({ content, postId: id, userId });
    res.status(201).json({
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await getCommentById(id);
    res.status(200).json({
      data: comment,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const removeComment = async (req, res) => {
  const { id, commentId } = req.params;

  try {
    const comment = await deleteComment(id);
    res.status(200).json({
      message: "Comment deleted successfully",
      data: comment,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
