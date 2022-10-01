import { ObjectSchema } from "joi";

export async function validateSchemas(schema: ObjectSchema, bodyInfo : any) {

        const validation =  schema.validate(bodyInfo);
        
        if(validation.error) {
            throw {type: "unprocessable_entity", message: "Incorrect data form!"}
        }
        
        
    }
