import joi from 'joi';
import { IUserRegister, IUserLogin } from '../types/userTypes';

const userRegisterSchema = joi.object<IUserRegister>({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
    cpf: joi.string().required(),
    address: joi.string().required(),
    photo: joi.string().uri().required()
});

const userLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const userSchema = {
    userRegisterSchema,
    userLoginSchema
}