import joi from 'joi';

const postCreateSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    categoryName: joi.string().required(),
    budget: joi.number().min(0).required(),
    travelAddress: joi.string().required(),
    arrivalDay: joi.string().required(),
    departureDay: joi.string().required()
});





export const postSchema = {
    postCreateSchema,
    
}