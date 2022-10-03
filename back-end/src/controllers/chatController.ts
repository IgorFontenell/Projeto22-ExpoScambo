import { Request, Response } from 'express';
import { chatService } from '../services/chatService';


export async function getAllChatsController (request: Request, response: Response) {
    const user = response.locals.user
    const allChats = await chatService.getAll(user.userId);

    response.status(201).send("Post created sucessfully!");
    
}