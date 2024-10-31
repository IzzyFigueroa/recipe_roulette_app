import {Router} from 'express';

import auth_routes from './auth_routes.js';



const router = Router();


router.use('/auth', auth_routes);


export default router;