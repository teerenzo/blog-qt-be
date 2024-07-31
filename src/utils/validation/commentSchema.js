import Joi from "joi";

const commentSchema = Joi.object({
  content: Joi.string().min(1).required(),
});

export default commentSchema;
