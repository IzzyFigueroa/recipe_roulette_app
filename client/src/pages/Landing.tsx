import { useState } from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";
import { Recipe } from "../interfaces";
import { useStore } from "../store";

function Landing() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const {state, setState} = useStore(); 
    if (state.loading) return 'loading';
    console.log('USER 2', state.user)

    return(
        <>
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRecipes={setRecipes} />

            <Recipes searchQuery={searchQuery} recipes={recipes} user={state.user} />
        </>
    )
}

export default Landing;
