import Joi from "joi";

const blogSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  content: Joi.string().min(10).required(),
});

export default blogSchema;
