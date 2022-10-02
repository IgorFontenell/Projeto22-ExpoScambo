import { validateSchemas } from '../middlewares/schemaValidator'
import { postRepository } from '../repositories/postRepository';
import { postSchema } from '../schemas/postSchemas'
import { TypeCreatePost } from '../types/postTypes'


async function create (postInfo: TypeCreatePost) {
    await validateSchemas(postSchema.postCreateSchema, postInfo);
    const lookingForCategory = await postRepository.findCategoryByName(postInfo.categoryName);

    if(!lookingForCategory) {
        throw {type: "not_found", message: "Category dosen't exist"}
    }
    


}

export const postService = {
    create
}