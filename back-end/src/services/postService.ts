import { validateSchemas } from '../middlewares/schemaValidator'
import { postRepository } from '../repositories/postRepository';
import { postSchema } from '../schemas/postSchemas'
import { TypeCreatePost } from '../types/postTypes'


async function create (postInfo: TypeCreatePost, userId: number) {
    await validateSchemas(postSchema.postCreateSchema, postInfo);
    const lookingForCategory = await postRepository.findCategoryByName(postInfo.categoryName);

    if(!lookingForCategory) {
        throw {type: "not_found", message: "Category dosen't exist"}
    }
    await postRepository.createPost(postInfo, userId);
    
    return;
}

async function getCategoryPostsByName (category: string) {

}

export const postService = {
    create,
    getCategoryPostsByName
}