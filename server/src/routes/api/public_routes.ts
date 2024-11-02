import { Router, Request, Response } from 'express';
import axios from 'axios';
import Recipe from '../../models/Recipe.js';

const router = Router();

router.get('/search', async (req: Request, res: Response) => {
  const searchQuery = req.query.search as string;
  if (!searchQuery) {
    res.status(400).json({ message: 'Search query is required' });
    return
  }

  try {
    const ninjaRes = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${searchQuery}`, {
      headers: {
        'X-Api-Key': process.env.NINJA_API_KEY || 'YOUR_API_KEY'
      }
    });

    res.json({
      results: ninjaRes.data
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'An error occurred while fetching recipes' });
  }
});


router.post('/addrecipe', async (req: Request, res: Response) => {
  console.log(req.body.recipe);
  const user = req.body.user;
  const recipe = req.body.recipe;
  try {
    const createdRecipe = await Recipe.create({
      title: recipe.title,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      instructions: recipe.instructions,
      user_id: user.id
    });

    console.log(createdRecipe)
    res.json({
      success: true,
    });
  } catch (error) {
    console.error('Error adding recipes:', error);
    res.status(500).json({ message: 'An error occurred while adding recipes' });
  }
});


router.post('/recipes', async (req: Request, res: Response) => {
  console.log(req.body.recipe);
  const userId = req.body.id;
  try {
    const findRecipes = await Recipe.findAll({
      where: {user_id: userId}
    });

    res.json(findRecipes);
  } catch (error) {
    console.error('Error finding recipes:', error);
    res.status(500).json({ message: 'An error occurred while finding recipes' });
  }
});




export default router;