import { client } from "../config/connection";
import { IUserRegister, IUserLogin } from '../types/userTypes';

async function createUser (userInfo: IUserRegister, passwordEncrypted: string) {
    await client.users.create({
        data: {
            name: userInfo.name,
            email: userInfo.email,
            password: passwordEncrypted,
            cpf: userInfo.cpf,
            photo: userInfo.photo
        }
    })
}

async function getUserByCpf (cpf: string) {
    
    return await client.users.findUnique({
        where: {
            cpf: cpf
        }
    })
}

async function getUserByEmail (email: string) {
    
    return await client.users.findUnique({
        where: {
            email: email
            
        }
    })
}

 async function findById (id: number) {
    
    return client.users.findUnique({
        where: { id }
      });
}

export const userRepository = {
    createUser,
    getUserByEmail,
    findById,
    getUserByCpf

}