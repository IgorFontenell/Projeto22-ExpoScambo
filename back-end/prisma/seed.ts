import { client } from '../src/config/connection';

async function main() {
    await upsertCategoryItems();

   
}

async function upsertCategoryItems() {
    await client.category.upsert({
        where: { id: 1 },
        update: {},
        create: { name: 'Roupas'}
    });
    await client.category.upsert({
        where: { id: 2 },
        update: {},
        create: { name: 'Celulares'}
    });
    await client.category.upsert({
        where: { id: 3 },
        update: {},
        create: { name: 'Jogos'}
    });
    await client.category.upsert({
        where: { id: 4 },
        update: {},
        create: { name: 'Eletrônicos'}
    });
    await client.category.upsert({
        where: { id: 5 },
        update: {},
        create: { name: 'Outros'}
    });
}
main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        client.$disconnect();
    })