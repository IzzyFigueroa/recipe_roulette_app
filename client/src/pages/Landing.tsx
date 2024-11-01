import { useState } from "react";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";
import { Recipe } from "../interfaces";

function Landing() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <>
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRecipes={setRecipes} />

            <Recipes searchQuery={searchQuery} recipes={recipes} />
        </>
    )
}

export default Landing;
