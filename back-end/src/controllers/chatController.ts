import { Request, Response } from 'express';
import { chatService } from '../services/chatService';


export async function getAllChatsController (request: Request, response: Response) {
    const user = response.locals.user
    const allChats = await chatService.getAll(user.id);

    response.status(200).send(allChats);
    
}

export async function getAllMessagesController (request: Request, response: Response) {
    const user = response.locals.user
    const destinyMessageId = Number(request.params.destinyId);
    const allMessages = await chatService.getAllMessages(user.id, destinyMessageId);

    response.status(200).send(allMessages);
    
}

export async function sendMessage (request: Request, response: Response) {
    const user = response.locals.user
    const destinyMessageId = Number(request.params.destinyId);
    const messageInfo = request.body

    await chatService.sendMessageService(messageInfo, user.id, destinyMessageId);

    response.status(201).send("Message send sucessfuly");
    
}