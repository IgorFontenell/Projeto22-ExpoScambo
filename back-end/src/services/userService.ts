import { validateSchemas } from "../middlewares/schemaValidator";
import { userRepository }  from "../repositories/userRepository";
import { userSchema } from "../schemas/userSchemas";
import { IUserRegister, IUserLogin} from '../types/userTypes';
import { decrypt, encrypt } from "../utils/criptUtils";
import jwt from 'jsonwebtoken';



async function createUser (userInfo: IUserRegister) {

    await validateSchemas(userSchema.userRegisterSchema, userInfo); // Validating the stucture of the information send by the front.

    let user: any = await userRepository.getUserByEmail(userInfo.email); // Looking for the user by his email.
    
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