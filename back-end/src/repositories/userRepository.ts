import { client } from "../config/connection";
import { IUserRegister, IUserLogin } from '../types/userTypes';

async function createUser (userInfo: IUserRegister, passwordEncrypted: string) {
    try {
        await client.users.create({
            data: {
                name: userInfo.name,
                email: userInfo.email,
                password: passwordEncrypted,
                cpf: userInfo.cpf,
                photo: userInfo.photo
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
    
}

async function getUserByCpf (cpf: string) {

    try {
        return await client.users.findUnique({
            where: {
                cpf: cpf
            }
        })
    } catch (error) {
        throw {type: "server_error", message: error}
    }
    
    
}

async function getUserByEmail (email: string) {
    try {
        return await client.users.findUnique({
            where: {
                email: email
                
            }
        });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}

 async function findById (id: number) {
    try {
        return client.users.findUnique({
            where: { id }
          });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
    
}

export const userRepository = {
    createUser,
    getUserByEmail,
    findById,
    getUserByCpf

}