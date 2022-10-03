import { validateSchemas } from '../middlewares/schemaValidator'
import { postRepository } from '../repositories/postRepository';
import { postSchema } from '../schemas/postSchemas'
import { TypeCreatePost, ICategoryDB, IPostDB } from '../types/postTypes'


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
    if(category === "Recomendados") {

    } else {
        const categoryDB: ICategoryDB | null = await postRepository.findCategoryByName(category);
        if (!categoryDB) {
            throw {type: "not_found", message: "Category dosen't exist"}
        }
        const posts = await postRepository.findPostsByCategory(categoryDB.name);
        //const posts: IPostDB | null = await postRepository.findPostsByCategory(categoryDB.name);

        return posts;
    }
}

export const postService = {
    create,
    getCategoryPostsByName
}