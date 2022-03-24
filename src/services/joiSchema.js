import Joi from 'joi'

export const formProductSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  price: Joi.number().min(1).max(10000).required(),
  description: Joi.string().min(10).max(200).required(),
  categoryId: Joi.number().min(1).max(5).required(),
  images: Joi.any(),
})
