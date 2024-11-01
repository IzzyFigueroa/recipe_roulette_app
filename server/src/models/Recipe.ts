import { DataTypes, Model, Optional } from 'sequelize';
import client from '../config/connection.js';

interface RecipeAttributes {
  id?: number;
  title: string;
  ingredients: string;
  servings: number;
  instructions: string;
}

interface RecipeCreationAttributes extends Optional<RecipeAttributes, 'id'> {}

class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> implements RecipeAttributes {
  public id!: number;
  public title!: string;
  public ingredients!: string;
  public servings!: number;
  public instructions!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Recipe.init(
  {
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize: client,
    tableName: 'recipes',
    underscored: true
  }
);

export default Recipe;