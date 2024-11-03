import { useState } from 'react';
import { Recipe } from '../interfaces';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface RecipesProps {

  searchQuery: string;

  recipes: Recipe[];

  user: {} | null;

  index: number;

}

function Recipes ({ recipes, searchQuery, user }: RecipesProps) {
  console.log(recipes);
  const navigate = useNavigate();

  const [addedRecipes, setAddedRecipes] = useState<number[]>([]);
  console.log('USER', user);
  const addRecipe = async (e: React.MouseEvent<HTMLButtonElement>, recipe: any, user: any, index: number) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/addrecipe', {
        recipe, user
      });
      console.log(response);
      setAddedRecipes([...addedRecipes, index]);
      // navigate('/recipebook')
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">{searchQuery} Recipes:</h1>
      <div className="row">
        {recipes.map((recipe, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Title: {recipe.title}</h5>
                <p className="card-ingredients">Ingredients: {recipe.ingredients}</p>
                <p className="card-servings">Servings: {recipe.servings}</p>
                <details className="flex-fill">
                  <summary>Instructions: </summary>
                  {recipe.instructions}
                </details>
                {addedRecipes.includes(index) ? (
                  <button className="btn btn-secondary" disabled>Saved To Recipe Book</button>
                ) : user ? (
                  <button className="btn btn-success mt-3" onClick={(e) => addRecipe(e, recipe, user, index)}>Add Book To Recipes</button>
                ) : (
                  <button className="btn btn-secondary" onClick={handleSignUp}>Sign Up to Save</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;