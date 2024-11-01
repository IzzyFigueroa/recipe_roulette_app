import { Recipe } from '../interfaces';

interface RecipesProps {

    searchQuery: string;

    recipes: Recipe[];

}

function Recipes ({recipes, searchQuery}: RecipesProps) {
    console.log(recipes);
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
                    <button className="btn btn-success mt-3">Add Book To Recipes</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Recipes;