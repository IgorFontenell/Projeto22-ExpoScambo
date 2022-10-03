import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { userService } from '../services/userService';

dotenv.config();


export async function autenticateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers['authorization'];
  if (!authorization) {
      throw {type: "unauthorized", message: "Missing authorization header!"}
  }

  const token = authorization.replace('Bearer ', '');
  
  if (!token) {
      throw {type: "unauthorized", message: "Missing token!"};
    }

  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const tokenInfo: any = jwt.verify(token as string, JWT_SECRET as string) as { userId: number };
    
    const user = await userService.findUserById(tokenInfo.userId);
    
    res.locals.user = user;
    
    next();
  } catch {
    throw {type: "unauthorized", message: "Invalid Token!"};
  }
}
