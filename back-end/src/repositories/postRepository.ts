import { client } from "../config/connection";

async function findCategoryByName (name: string) {
    return await client.category.findFirst({
        where: { name }
    })


}

export const postRepository = {
    findCategoryByName
}