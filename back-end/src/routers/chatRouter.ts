import { Router } from "express";
import { getAllChatsController, getAllMessagesController, sendMessage } from "../controllers/chatController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";


const chat = Router();

chat.get("/chat/all", autenticateMiddleware, getAllChatsController);
chat.get("/chat/:destinyId", autenticateMiddleware, getAllMessagesController);
chat.post("/chat/message/:destinyId", autenticateMiddleware, sendMessage);


export default chat;
