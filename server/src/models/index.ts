import client from '../config/connection.js';

import User from './User.js';







// Create the manager association
// User can have one manager but a manager could belong to(or be attached to) any user
// User.hasOne(User, { foreignKey: 'manager_id', as: 'manager' });
// User.belongsTo(User, { foreignKey: 'manager_id', as: 'employee' });


export {client, User};