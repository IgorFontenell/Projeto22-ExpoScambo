import { Request, Response } from 'express';
import { chatService } from '../services/chatService';


export async function getAllChatsController (request: Request, response: Response) {
    const user = response.locals.user
    const allChats = await chatService.getAll(user.userId);

    response.status(200).send(allChats);
    
}

export async function getAllMessagesController (request: Request, response: Response) {
    const user = response.locals.user
    const allMessages = await chatService.getAllMessages(user.userId);

    response.status(200).send(allMessages);
    
}