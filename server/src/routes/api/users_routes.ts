import { Router, Request, Response } from 'express';
import { createToken, verifyToken } from '../helpers/index.js';
import { User } from '../../models/index.js';

const router = Router();


router.post('/register', async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
   
    const token = createToken(user.id);

    res.cookie('token', token, {
     
      httpOnly: true
    });

  
    res.json({
      user: user
    });
  } catch (error: any) {
   

    if (error.errors) {
      res.status(403).json({
        user: null,
        message: error.errors[0].message
      });
    } else {
      res.status(403).json({
        user: null,
        message: 'Registration failed. Please try again.'
      });
    }
    
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const {email, password} = req.body;

 
  const user = await User.findOne({
    where: {
      email
    }
  });

 
  if (!user) {
    res.status(403).json({
    
      notFound: true,
      user: null,
      message: 'No user found with that email address'
    });
  } else {
    
    const valid_pass = await user.validatePassword(password);
   
    if (!valid_pass) {
      res.status(403).json({
        user: null,
        message: 'Your password is incorrect'
      });
      return;
    }

    
    const token = createToken(user.id);

    res.cookie('token', token, {
      httpOnly: true
    });

  
    res.json({
      user
    })
  }
});

router.get('/user', async (req: Request, res: Response) => {
  const token = req.cookies?.token;

  if (!token) {
    res.json({
      user: null
    });
    return;
  }

  const userData = verifyToken(token);

  if (userData && typeof userData !== 'string') {
    const user = await User.findByPk(userData.user_id);

    res.json({ user });
    return;
  }
  
  res.json({ user: null });
});

router.get('/logout', async (_, res: Response) => {
 
  res.clearCookie('token');
  res.json({
    message: 'Logged out successfully!'
  })
});


export default router;