import { Request, Response } from 'express';
import { postService } from '../services/postService';
import { TypeCreatePost } from '../types/postTypes';



export async function createPostController (request: Request, response: Response) {
    const postInfo: TypeCreatePost = request.body;
    const user = response.locals.user;
    postInfo.budget = Number(postInfo.budget);
    await postService.create(postInfo, user.id);

    response.status(201).send("Post created sucessfully!");
    
}

export async function getPostsByCategory(request: Request, response: Response) {
    const category: string = request.body;
    await postService.getCategoryPostsByName(category);
}