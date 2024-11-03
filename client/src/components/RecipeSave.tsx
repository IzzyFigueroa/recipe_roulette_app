import axios from "axios";
import { useStore } from "../store";
import { useState, useEffect } from "react";

function RecipeSave() {
    interface Recipe {
        title: string;
        ingredients: string;
        servings: string;
        instructions: string;
    }

    const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
    const store = useStore();
    if (!store) {
        return <div>Error: Store is not available</div>;
    }
    const { state } = store;
    const { user } = state;
    console.log('USER', user);

    useEffect(() => {
        if (user?.id) {
            axios.post('/api/recipes', user)
                .then(res => {
                    console.log(res.data);
                    setUserRecipes(res.data);
                });
        }
    }, [user])

    return (
        <>
            <div className="container my-4">
                <h3 className="text-center mb-4 text-white">Saved Recipes:</h3>
                <div className="row">
                    {userRecipes.map((recipe, index) => (
                        <div key={index} className="col-md-3 col-xs-12 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.title}</h5>
                                    <p className="card-ingredients">{recipe.ingredients}</p>
                                    <p className="card-servings">{recipe.servings}</p>
                                    <details className="flex-fill">
                                        <summary>Instructions: </summary>
                                        {recipe.instructions}
                                    </details>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecipeSave;