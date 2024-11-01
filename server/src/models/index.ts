import client from '../config/connection.js';

import User from './User.js';
import Recipe from './Recipe.js';







// Create the manager association
// User can have one manager but a manager could belong to(or be attached to) any user
User.hasMany(Recipe, { foreignKey: 'user_id'});
Recipe.belongsTo(User, { foreignKey: 'user_id'});


export {client, User, Recipe};