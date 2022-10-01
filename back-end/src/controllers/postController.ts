import { Request, Response } from 'express';
import { TypeCreatePost } from '../types/postTypes';



export async function createPostController (request: Request, response: Response) {
    const postInfo: TypeCreatePost = request.body;
    const user = response.locals.user;
    //await examsService.create(examsInfo);

    response.status(201).send("Exam created sucessfully!");
    

}