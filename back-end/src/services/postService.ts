import { validateSchemas } from '../middlewares/schemaValidator'
import { postRepository } from '../repositories/postRepository';
import { userRepository } from '../repositories/userRepository';
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

    let posts;
    if(category === "Recomendados") {
        posts = await postRepository.findPostsByScore();
    } else {
        const categoryDB: ICategoryDB | null = await postRepository.findCategoryByName(category);
        if (!categoryDB) {
            throw {type: "not_found", message: "Category dosen't exist"}
        }
        posts = await postRepository.findPostsByCategory(categoryDB.name);
        //posts: IPostDB | null = await postRepository.findPostsByCategory(categoryDB.name);
    }
    return posts;
}

async function getPostByIdService (id: number) {
    const postId = id;
    const post = await postRepository.findPostById(id);
    if(!post) {
        throw {type: "not_found", message: "Post dosen't exist"}
    }
    const user = await userRepository.findById(post.userId);
    
}

export const postService = {
    create,
    getCategoryPostsByName,
    getPostByIdService,
    
}