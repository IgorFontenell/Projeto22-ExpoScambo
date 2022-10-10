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
                title: postInfo.title,
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
            where: { categoryName: name },
            include: {
                user: true
            }
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
    
}
async function findPostsByScore () {
    try {
        return await client.posts.findMany({
            take: 20,
            orderBy: {
                user: {
                    score: "desc",
                },
            },
            include: {
                user: true,
                
            }
        })
        
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

async function getAllCategoriesRepository () {
    try {
        return await client.category.findMany({});
    } catch (error){
        throw {type: "server_error", message: error}
    }
}

export const postRepository = {
    findCategoryByName,
    createPost,
    findPostsByCategory,
    findPostsByScore,
    findPostById,
    getAllCategoriesRepository
}



