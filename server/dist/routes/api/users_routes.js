import { Router } from 'express';
// import { isAuthenticated } from '../helpers/index.js';
// import axios from 'axios';
const router = Router();
// router.get('/search', isAuthenticated, async (req: Request, res: Response) => {
//   const searchQuery = req.query.search as string;
//   if (!searchQuery) {
//     res.status(400).json({ message: 'Search query is required' });
//     return
//   }
//   try {
//     const ninjaRes = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${searchQuery}`, {
//       headers: {
//         'X-Api-Key': process.env.NINJA_API_KEY || 'YOUR_API_KEY'
//       }
//     });
//     res.json({
//       results: ninjaRes.data
//     });
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     res.status(500).json({ message: 'An error occurred while fetching recipes' });
//   }
// });
export default router;
