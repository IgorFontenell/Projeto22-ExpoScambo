import { client } from "../config/connection";
import user from "../routers/userRouter";
import { ISendMessage } from "../types/chatTypes";

async function getAllChats (id: number) {
    try {
        return await client.chat.findMany({
            where: {
                OR: [
                    { courierId: id },
                    { buyerId: id}
                ]
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}

async function getAllMessagesBetween2User (userId: number, destinyMessageId: number) {
    try {
        return await client.messages.findMany({
            where: {
                OR: [
                    { writerId: userId,
                     destinyId: destinyMessageId 
                    },
                    {
                     writerId: destinyMessageId,
                     destinyId: userId 
                    }
                ],
            },
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}

async function getChatBetween2Users (userId: number, destinyMessageId: number) {
    try {
        return await client.chat.findFirst({
            where: {
                OR: [
                    { courierId: userId,
                        buyerId: destinyMessageId 
                    },
                    {
                        courierId: destinyMessageId,
                        buyerId: userId 
                    }
                ],
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}
async function createChat (userId: number, destinyMessageId: number) {
    try {
        return await client.chat.create({
            data: {
                courierId: destinyMessageId,
                buyerId: userId
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}

async function sendMessageRepository (messageInfo: ISendMessage) {
    try {
        return await client.messages.create({
            data: {...messageInfo}
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}


export const chatRepository = {
    getAllChats,
    getAllMessagesBetween2User,
    getChatBetween2Users,
    createChat,
    sendMessageRepository
}