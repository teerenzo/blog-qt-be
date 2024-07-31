import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  content: Joi.string().min(10).required(),
  userId: Joi.number().integer().required(),
});

export default postSchema;
