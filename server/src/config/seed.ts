// import { User, Recipe } from '../models/index.js'; // Adjust the import path as necessary
// import { faker } from '@faker-js/faker';
// import { client } from '../models/index.js';

// const seedDatabase = async () => {
//     await client.sync({ force: true });

//     const users = [];
//     for (let i = 0; i < 10; i++) {
//         users.push({
//             first_name: faker.person.firstName(),
//             last_name: faker.person.lastName(),
//             email: faker.internet.email(),
//             password: faker.internet.password(),
//         });
//     }

//     const createdUsers = await User.bulkCreate(users);

//     const recipes: any = [];
//     for (let i = 0; i < 50; i++) {
//         recipes.push({
//             title: faker.food.dish(),
//             ingredients: faker.food.ingredient(),
//             servings: '2',
//             instructions: 'mix it all together and good luck',
//             user_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
//         });
//     }

//     await Recipe.bulkCreate(recipes);

//     console.log('Database seeded!');
// };

// seedDatabase().catch((err) => {
//     console.error('Failed to seed database:', err);
// });