import { validateSchemas } from '../middlewares/schemaValidator';
import { chatRepository } from '../repositories/chatRepository';
import { userRepository } from '../repositories/userRepository';
import { IChatDB } from '../types/chatTypes';
import dayjs from 'dayjs'
import { messageSchema } from '../schemas/chatSchemas';


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

async function sendMessageService (messageText: { message: string },userId: number, destinyMessageId: number) {

    await validateSchemas(messageSchema.messageCreateSchema, messageText);
    
    const destinyUser = await userRepository.findById(destinyMessageId);
    if(!destinyUser) {
        throw {type: "not_found", message: "User dosen't exist"}
    }

    let messageInfo;
    const now = dayjs().format('mm:HH-DD/MM/YYYY');

    const chatAlreadyExist: IChatDB | null = await chatRepository.getChatBetween2Users(userId, destinyMessageId);          
    if(!chatAlreadyExist) {
        await chatRepository.createChat(userId, destinyMessageId);

        const chatInfo: IChatDB | null= await chatRepository.getChatBetween2Users(userId, destinyMessageId);
        if(!chatInfo) {
            throw {type: "server_error", message: "Chat couldn't be created"}
        }
        messageInfo = {
            chatId: chatInfo.id,
            writerId: userId,
            destinyId: destinyMessageId,
            message: messageText.message,
            timeOfMessage: now
        }
    } else {
        messageInfo = {
            chatId: chatAlreadyExist.id,
            writerId: userId,
            destinyId: destinyMessageId,
            message: messageText.message,
            timeOfMessage: now
        }
    }
    
    await chatRepository.sendMessageRepository(messageInfo);
    return;
}


export const chatService = {
    getAll,
    getAllMessages,
    sendMessageService
    
}