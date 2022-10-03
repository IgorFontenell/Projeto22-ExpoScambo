import { Request, Response } from 'express';
import { postService } from '../services/postService';
import { TypeCreatePost } from '../types/postTypes';



export async function createPostController (request: Request, response: Response) {
    const postInfo: TypeCreatePost = request.body;
    const user = response.locals.user;
    
    await postService.create(postInfo, user.id);

    response.status(201).send("Post created sucessfully!");
    
}