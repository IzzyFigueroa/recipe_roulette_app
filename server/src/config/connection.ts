import { Sequelize } from 'sequelize';

const client = new Sequelize({
  username: 'postgres',
  password: 'pass',
  database: 'recipe_roulette_db',
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default client;