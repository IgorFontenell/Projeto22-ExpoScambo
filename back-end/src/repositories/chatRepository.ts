import { client } from "../config/connection";

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


export const chatRepository = {
    getAllChats
}