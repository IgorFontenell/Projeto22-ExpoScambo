import { validateSchemas } from "../middlewares/schemaValidator";
//import { userRepository }  from "../repositories/userRepository";
import { userSchema } from "../schemas/userSchemas";
import { IUserRegister, IUserLogin} from '../types/userTypes';
import { decrypt, encrypt } from "../utils/criptUtils";
import jwt from 'jsonwebtoken';



async function createUser (userInfo: IUserRegister) {

    await validateSchemas(userSchema.userRegisterSchema, userInfo); // Validating the stucture of the information send by the front.
    const passwordEncrypted: string = encrypt(userInfo.password); // Encrypting the password so it can be storage in the DB safely.

    //const user: any = await userRepository.getUserByEmail(userInfo.email); // Looking for the user by his email.
    
    //if(user) {
    //    throw {type: "not_acceptable", message: "User already exist!"}
   // }
    await userRepository.createUser(userInfo, passwordEncrypted); // Creating the user in the DB.
}