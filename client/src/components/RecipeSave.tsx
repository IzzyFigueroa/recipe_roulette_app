import axios from "axios";
import { useStore } from "../store";
import { useState, useEffect } from "react";

function RecipeSave() {
    const [userRecipes, setUserRecipes] = useState([]);
    const { state } = useStore();
    const { user } = state;
    console.log('USER', user);

    useEffect(() => {
        if (user?.id){
        axios.post('/api/recipes', user)
            .then(res => {
                console.log(res.data);
                setUserRecipes(res.data);
            });
    }}, [user])

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
                                    <p className="card-instructions">{recipe.instructions}</p>
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