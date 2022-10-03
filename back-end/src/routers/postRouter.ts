import { Router } from "express";
import { createPostController } from "../controllers/postController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";


const post = Router();

post.post("/posts/create", autenticateMiddleware, createPostController);
post.post("/sign-in", );

export default post;
