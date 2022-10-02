import { client } from "../config/connection";
import { TypeCreatePost } from '../types/postTypes'


async function findCategoryByName (name: string) {
    return await client.category.findFirst({
        where: { name }
    });
}

async function createPost(postInfo: TypeCreatePost, userId: number){
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

}

export const postRepository = {
    findCategoryByName,
    createPost
}