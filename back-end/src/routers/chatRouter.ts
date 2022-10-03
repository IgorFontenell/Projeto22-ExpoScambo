import { Router } from "express";
import { getAllChatsController } from "../controllers/chatController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";


const chat = Router();

chat.get("/chat/all", autenticateMiddleware, getAllChatsController);
chat.get("/chat/messages/:destinyId", );

export default chat;
