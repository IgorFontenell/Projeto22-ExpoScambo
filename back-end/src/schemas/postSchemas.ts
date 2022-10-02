import joi from 'joi';

const postCreateSchema = joi.object({
    description: joi.string().required(),
    categoryName: joi.string().required(),
    budget: joi.number().min(0).required(),
    travelAddress: joi.string().required(),
    arrivalDay: joi.date().required(),
    departureDay: joi.date().required()
});





export const postSchema = {
    postCreateSchema,
    
}