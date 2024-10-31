import { Sequelize } from 'sequelize';

const client = new Sequelize({
  username: 'postgres',
  password: '1361',
  database: 'winery_app_db',
  host: 'localhost',
  dialect: 'postgres'
});

export default client;