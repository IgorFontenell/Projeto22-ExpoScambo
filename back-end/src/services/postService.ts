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
        
    }
    posts = posts.map(object => {
        const newPost = {
            id: object.id,
            userId: object.userId,
            title: object.title,
            name: object.user.name,
            email: object.user.email,
            photo: object.user.photo,
            score: object.user.score,
            description: object.description,
            categoryName: object.categoryName,
            budget: object.budget,
            travelAddress: object.travelAddress,
            arrivalDay: object.arrivalDay,
            departureDay: object.departureDay
        }
        return newPost;

    })
    return posts;
}

async function getPostByIdService (id: number) {
    const postId = id;
    const post = await postRepository.findPostById(postId);
    if(!post) {
        throw {type: "not_found", message: "Post dosen't exist"}
    }

    const user = await userRepository.findById(post.userId);
    if(!user) {
        throw {type: "not_found", message: "Post owner not found"}
    }
    const postInfo = {
        post: {...post},
        user: {
            id: user.id,
            name: user.name,
            photo: user.photo,
            score: user.score
        }
    }
    return postInfo;
}

async function getAllCategories () {
    const categories = await postRepository.getAllCategoriesRepository();
    if(!categories) {
        throw {type: "not_found", message: "There are no categories yet!"}
    }
    return categories;
}

export const postService = {
    create,
    getCategoryPostsByName,
    getPostByIdService,
    getAllCategories
    
}