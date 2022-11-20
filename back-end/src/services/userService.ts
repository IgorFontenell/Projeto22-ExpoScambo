import { validateSchemas } from "../middlewares/schemaValidator";
import { userRepository }  from "../repositories/userRepository";
import { userSchema } from "../schemas/userSchemas";
import { IUserRegister, IUserLogin, IUserDB} from '../types/userTypes';
import { decrypt, encrypt } from "../utils/criptUtils";
import jwt from 'jsonwebtoken';



async function createUser (userInfo: IUserRegister) {

    await validateSchemas(userSchema.userRegisterSchema, userInfo); // Validating the stucture of the information send by the front.

    let user: IUserDB | null = await userRepository.getUserByEmail(userInfo.email); // Looking for the user by his email.
    
    if(user) {
        throw {type: "not_acceptable", message: "Email already registered!"}
    }

    user = await userRepository.getUserByCpf(userInfo.cpf); // Looking for the user by his  cpf.
    if(user) {
        throw {type: "not_acceptable", message: "Cpf already registered!"}
    }

    const passwordEncrypted: string = encrypt(userInfo.password); // Encrypting the password so it can be storage in the DB safely.
    await userRepository.createUser(userInfo, passwordEncrypted); // Creating the user in the DB.
}

async function loginUser (userInfo: IUserLogin) {

    await validateSchemas(userSchema.userLoginSchema, userInfo); // Validating the stucture of the information send by the front.
    const userDB: IUserDB | null = await userRepository.getUserByEmail(userInfo.email); // Looking for the user by his email.
    
    if(!userDB) {
        throw {type: "not_found", message: "User do not exist!"}
    }
    
    const passwordDecrypted: string = decrypt(userDB.password); // Decypting the password got from the DB.
    if(userInfo.password !== passwordDecrypted) { // Checking if the password from the DB is the same send by the front.
        throw {type: "unauthorized", message: "Incorrect password!"}
    }
    
    const token : string = jwt.sign({ userId: userDB.id }, process.env.JWT_SECRET as string) // Creating the token.
    
    return token; //Sending the token.
    
}

async function findUserById(id: number) {
    if(!id) {
        throw {type: "not_acceptable", message: "User Id wasen't send!"};
    }
    const user = await userRepository.findById(id);
    if (!user) {
        throw {type: "not_found", message: "User do not exist!"}
    };
  
    return user;
}

async function sendScoreService(courierId: number, buyerId: number, scoreInfo: { score: number }) {
    scoreInfo.score = scoreInfo.score*100;
    await validateSchemas(userSchema.sendScoreSchema, scoreInfo);

    const courier = await userRepository.findById(courierId);
    if (!courier) {
        throw {type: "not_found", message: "Courier do not exist!"}
    };

    const buyer = await userRepository.findById(buyerId);
    if (!buyer) {
        throw {type: "not_found", message: "Buyer do not exist!"}
    };

    const alreadyEvaluated = await userRepository.userAlreadyEvaluated(buyerId, courierId);
    if(alreadyEvaluated) {
        throw {type: "not_acceptable", message: "User already gave a score to this courier"}
    }

    await userRepository.insertEvaluation(buyer.id, courier.id, scoreInfo.score);

    const finalScore = await userRepository.getScoreAverage(courier.id);


    if(!finalScore._avg.score) {
        throw {type: "server_error", message: "Couldn't get the score updated"}
    }

    await userRepository.updateUserScore(courier.id, finalScore._avg.score);
    return ;
}

async function getUserService (userId: number) {
    if(!userId) {
        throw {type: "not_acceptable", message: "User Id wasen't send!"};
    }

    const user = await userRepository.findById(userId);
    const userFinal = {
        id: user?.id,
        name: user?.name,
        photo: user?.photo,
        score: user?.score,
        email: user?.email
    }
    return userFinal;
}



export const userService = {
    createUser,
    loginUser,
    findUserById,
    sendScoreService,
    getUserService
}