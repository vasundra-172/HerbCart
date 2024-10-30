const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        uses: Joi.string().required(),
        other_names: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        nursery: Joi.string().required(),
        address: Joi.string().required(),
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
})