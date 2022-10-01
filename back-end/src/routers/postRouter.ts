import { Router } from "express";
import { createPostController } from "../controllers/postController";


const post = Router();

post.post("/posts_create", createPostController);
post.post("/sign-in", );

export default post;
