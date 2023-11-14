const Joi = require('joi');



const productSchema = Joi.object({
    category: Joi.string().required(),
    name : Joi.string().required(),
    price : Joi.number().required(),
    img : Joi.string().required(),
    desc : Joi.string().required(),
})

const reviewSchema = Joi.object({
    name: Joi.string().required(),
    rating : Joi.number().min(0).max(5).required(),
    comment : Joi.string().required()
});


module.exports = {productSchema, reviewSchema};















