import { Router, Request, Response} from 'express';
import { isAuthenticated } from '../helpers/index.js';
// import { User } from '../../models/index.js';
import axios from 'axios';

const router = Router();

router.get('/search', isAuthenticated, async (req: Request, res: Response) => {
  const ninjaRes = await axios.get('https://api.api-ninjas.com/v1/recipe?query=' + req.body.search, {
    headers: {
      'X-Api-Key': process.env.NINJA_API_KEY
    }
  })

  ninjaRes.data
  res.json({
    results: ninjaRes.data
  });
});

export default router;