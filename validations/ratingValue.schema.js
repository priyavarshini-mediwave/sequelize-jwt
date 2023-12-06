const Joi = require("joi");

const ratingValueSchema = Joi.object({
  item_id: Joi.string().required(),
  user_id: Joi.string().required(),
  ratingValue: Joi.number().integer().min(1).max(5).required(),
});

module.exports = {
  ratingValueSchema,
};
