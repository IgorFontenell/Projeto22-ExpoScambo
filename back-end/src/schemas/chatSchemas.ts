import joi from 'joi';

const messageCreateSchema = joi.object({
    message: joi.string().required()
});





export const messageSchema = {
    messageCreateSchema
}