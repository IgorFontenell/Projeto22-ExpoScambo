import { client } from "../config/connection";
import user from "../routers/userRouter";

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
                timeOfMessage: 'asc'
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}


export const chatRepository = {
    getAllChats,
    getAllMessagesBetween2User
}