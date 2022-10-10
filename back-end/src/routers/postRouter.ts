import { Router } from "express";
import { createPostController, getPostById, getPostsByCategory, getCategories } from "../controllers/postController";
import { autenticateMiddleware } from "../middlewares/authMiddleware";


const post = Router();

post.post("/posts/create", autenticateMiddleware, createPostController);
post.get("/posts/:id", getPostById);
post.get("/category/:category", getPostsByCategory);
post.get("/categories", getCategories);


export default post;
