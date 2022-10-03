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
        return await client.posts.create({
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
        return await client.posts.findMany({
            
        });
    } catch (error){
        throw {type: "server_error", message: error}
    }
    
}

export const postRepository = {
    findCategoryByName,
    createPost,
    findPostsByCategory,
    findPostsByScore
}