import { validateSchemas } from '../middlewares/schemaValidator';
import { chatRepository } from '../repositories/chatRepository';
import { userRepository } from '../repositories/userRepository';
import dayjs from 'dayjs'

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

    let messageInfo;
    const now = dayjs().format('mm-HH-DD-MM-YYYY');

    const chatAlreadyExist = await chatRepository.getChatBetween2Users(userId, destinyMessageId);          
    if(!chatAlreadyExist) {
        await chatRepository.createChat(userId, destinyMessageId);
        const chatInfo = await chatRepository.getChatBetween2Users(userId, destinyMessageId); 
        messageInfo = {
            chatId: chatInfo.id,
            writerId: userId,
            destinyId: destinyMessageId,
            message: "dasdasdas",
            timeOfMessage: now
        }
    }
    
    //await chatRepository.sendMessageRepository(userId, destinyMessageId);
    return;
}


export const chatService = {
    getAll,
    getAllMessages,
    sendMessageService
    
}