import { Request, Response } from 'express';
import { IUserRegister, IUserLogin } from '../types/userTypes';

export async function registerController (request: Request, response: Response) {
    const userInfo: IUserRegister = request.body; 
    

}