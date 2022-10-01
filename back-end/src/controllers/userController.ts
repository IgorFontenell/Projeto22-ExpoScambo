import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { IUserRegister, IUserLogin } from '../types/userTypes';

export async function registerController (request: Request, response: Response) {
    const userInfo: IUserRegister = request.body; 
    await userService.createUser(userInfo);
    response.status(201).send("User created sucessfuly!");
}