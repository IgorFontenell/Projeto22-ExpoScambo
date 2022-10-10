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
    const category: string = request.params.category;
    const posts = await postService.getCategoryPostsByName(category);
    response.status(200).send(posts);
}

export async function getPostById(request: Request, response: Response) {
    const postId: number = Number(request.params.id);
    const post = await postService.getPostByIdService(postId);
    response.status(200).send(post);
}

export async function getCategories(request: Request, response: Response) {
    
    const categories = await postService.getAllCategories();
    response.status(200).send(categories);
}