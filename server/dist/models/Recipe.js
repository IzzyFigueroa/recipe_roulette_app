import { DataTypes, Model } from 'sequelize';
import client from '../config/connection.js';
class Recipe extends Model {
}
Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    servings: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', key: 'id',
        }
    }
}, {
    sequelize: client,
    tableName: 'recipes',
    underscored: true
});
export default Recipe;
