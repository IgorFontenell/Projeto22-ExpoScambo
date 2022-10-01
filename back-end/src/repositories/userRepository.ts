import { client } from "../config/connection";
import { IUserRegister, IUserLogin } from '../types/userTypes';

async function createUser (userInfo: IUserRegister, passwordEncrypted: string) {
    await client.users.create({
        data: {
            email: userInfo.email,
            password: passwordEncrypted,
            cpf: userInfo.cpf,
            photo: userInfo.photo
        }
    })
}

async function getUserByEmail (email: string, cpf: string) {
    
    return await client.users.findUnique({
        where: {
            email: email,
            cpf: cpf
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
    findById

}