import { client } from "../config/connection";
import { TypeCreatePost } from '../types/postTypes'


async function findCategoryByName (name: string) {
    try {
        return await client.category.findFirst({
            where: { name }
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
    
}

async function createPost(postInfo: TypeCreatePost, userId: number){

    try {
         await client.posts.create({
            data: {
                userId: userId,
                description: postInfo.description,
                categoryName: postInfo.categoryName,
                budget: postInfo.budget,
                travelAddress: postInfo.travelAddress,
                arrivalDay: postInfo.arrivalDay,
                departureDay: postInfo.departureDay,
            }
        });
        
    } catch (error) {
        throw {type: "server_error", message: error}
    }
}

async function findPostsByCategory (name: string) {
    try {
        return await client.posts.findMany({
            where: { categoryName: name }
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
    
}
async function findPostsByScore () {
    try {
        return await client.users.findMany({
            select: {
                Posts: true
            },
            orderBy: {
                score: 'desc'
            },
            take: 20
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
}

async function findPostById (postId: number) {
    try {
        return await client.posts.findUnique({
            where: { id: postId }
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
}

export const postRepository = {
    findCategoryByName,
    createPost,
    findPostsByCategory,
    findPostsByScore,
    findPostById
}