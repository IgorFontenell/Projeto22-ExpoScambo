import { validateSchemas } from '../middlewares/schemaValidator';
import { chatRepository } from '../repositories/chatRepository';

async function getAll (userId: number) {
    const allMessages = await chatRepository.getAllChats(userId);
    return allMessages;
}
async function getAllMessages (userId: number, destinyMessageId: number) {
    const allMessages = await chatRepository.getAllMessagesBetween2User(userId, destinyMessageId);
    return allMessages;
}


export const chatService = {
    getAll,
    getAllMessages
    
}