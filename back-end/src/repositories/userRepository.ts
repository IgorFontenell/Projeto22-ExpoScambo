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
        return await client.users.findUnique({
            where: { id }
          });
    } catch (error) {
        console.log(error);
        //throw {type: "server_error", message: error}
    }
    
}

async function userAlreadyEvaluated (evaluaterId: number, evaluatedId: number) {
    try {
        return await client.scoreHistory.findFirst({
            where: { 
                userId: evaluatedId,
                evaluatorId: evaluaterId
             }
          });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
    
}

async function insertEvaluation (evaluaterId: number, evaluatedId: number, score: number) {
    try {
        await client.scoreHistory.create({
            data: { 
                userId: evaluatedId,
                evaluatorId: evaluaterId,
                score: score
             }
          });
    } catch (error) {
        throw {type: "server_error", message: error}
    } 
}

async function getScoreAverage (evaluatedId: number) {
    try {
       return await client.scoreHistory.aggregate({
           _avg:{
               score: true
           },
            where: { 
                userId: evaluatedId
             }
          });
    } catch (error) {
        throw {type: "server_error", message: error}
    } 
}

async function updateUserScore (userId: number, score: number) {
    try {
        return await client.users.update({
            where: { 
                id: userId
             },
             data: { score }
          });
    } catch (error) {
        throw {type: "server_error", message: error}
    }
    
}


export const userRepository = {
    createUser,
    getUserByEmail,
    findById,
    getUserByCpf,
    userAlreadyEvaluated,
    insertEvaluation,
    getScoreAverage,
    updateUserScore

}