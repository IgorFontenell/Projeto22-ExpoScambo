import joi from 'joi';
import { IUserRegister, IUserLogin } from '../types/userTypes';

const cpfRegex = 
/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/

const userRegisterSchema = joi.object<IUserRegister>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
    cpf: joi.string().regex(cpfRegex).required(),
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