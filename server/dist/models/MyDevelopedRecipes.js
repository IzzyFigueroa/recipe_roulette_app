import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
class PersonalRecipes extends Model {
}
PersonalRecipes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    // This is the required client connection
    sequelize: client,
    tableName: 'personal_recipes',
    underscored: true
});
export default PersonalRecipes;
