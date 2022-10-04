import joi from 'joi';

const sendScoreSchema = joi.object({
    message: joi.string().required()
});





export const scoreSchema = {
    sendScoreSchema
}