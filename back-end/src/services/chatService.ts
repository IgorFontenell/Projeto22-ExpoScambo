import { validateSchemas } from '../middlewares/schemaValidator';
import { chatRepository } from '../repositories/chatRepository';
import { userRepository } from '../repositories/userRepository';

async function getAll (userId: number) {
    const allMessages = await chatRepository.getAllChats(userId);
    return allMessages;
}

async function getAllMessages (userId: number, destinyMessageId: number) {

    const destinyUser = await userRepository.findById(destinyMessageId);
    if(!destinyUser) {
        throw {type: "not_found", message: "User dosen't exist"}
    }
    const allMessages = await chatRepository.getAllMessagesBetween2User(userId, destinyMessageId);
    return allMessages;
}

async function sendMessageService (userId: number, destinyMessageId: number) {

    const destinyUser = await userRepository.findById(destinyMessageId);
    if(!destinyUser) {
        throw {type: "not_found", message: "User dosen't exist"}
    }
    await chatRepository.sendMessageRepository(userId, destinyMessageId);
    return;
}


export const chatService = {
    getAll,
    getAllMessages,
    sendMessageService
    
}