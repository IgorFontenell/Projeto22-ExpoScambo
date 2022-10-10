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
    const courierId = Number(request.params.courierId);
    const scoreInfo = request.body;
    const buyer = response.locals.user
    await userService.sendScoreService(courierId, buyer.id,  scoreInfo);

    response.status(201).send("Score updated sucessfu");
}

export async function getUserInformationController (request: Request, response: Response) {
    let userId = Number(request.params.userId);
    const user = await userService.getUserService(userId);

    response.status(200).send(user);
}

export async function getUserInformationByToken (request: Request, response: Response) {
    let user = response.locals.user;
    user = {
        id: user.id,
        name: user.name,
        photo: user.photo,
        email: user.email
    }
    response.status(200).send(user);
}