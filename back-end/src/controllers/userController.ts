import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { IUserRegister, IUserLogin } from '../types/userTypes';

export async function registerController (request: Request, response: Response) {
    const userInfo: IUserRegister = request.body; 
    await userService.createUser(userInfo);
    response.status(201).send("User created sucessfuly!");
}

export async function loginController (request: Request, response: Response) {

    const userInfo: IUserLogin = request.body;
    const token = await userService.loginUser(userInfo);

   response.status(200).send(token);

}

export async function sendScoreController (request: Request, response: Response) {
    const courierId = request.params.courierId;
    const scoreInfo = request.body;

    


}