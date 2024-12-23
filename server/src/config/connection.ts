import { Sequelize } from 'sequelize';

let client: any;

client = process.env.DB_URL ? new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}) : new Sequelize({
  username: 'postgres',
  password: 'pass',
  database: 'recipe_roulette_db',
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default client;