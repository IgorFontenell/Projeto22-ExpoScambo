import { validateSchemas } from '../middlewares/schemaValidator'
import { postSchema } from '../schemas/postSchemas'
import { TypeCreatePost } from '../types/postTypes'


async function create (postInfo: TypeCreatePost) {
    await validateSchemas(postSchema.postCreateSchema, postInfo);
}

export const postService = {
    create
}