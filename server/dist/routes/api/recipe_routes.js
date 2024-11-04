import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const router = Router();
const API_KEY = process.env.NINJA_API_KEY; // Load the API key from the environment variables
const API_URL = 'https://api.api-ninjas.com/v1/recipe'; // Replace with the actual API URL
router.get('/recipes', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`${API_URL}?query=${query}`, {
            headers: {
                'X-Api-Key': API_KEY
            }
        });
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching recipes:', error);
    }
});
export default router;
