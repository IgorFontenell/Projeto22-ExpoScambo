import { Router } from "express";
import { createPostController, getPostById, getPostsByCategory } from "../controllers/postController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";


const post = Router();

post.post("/posts/create", autenticateMiddleware, createPostController);
post.get("/posts/:id", autenticateMiddleware, getPostById);
post.get("/category/:category", autenticateMiddleware, getPostsByCategory);


export default post;
