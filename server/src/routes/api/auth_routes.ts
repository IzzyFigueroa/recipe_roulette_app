import { Router, Request, Response, } from 'express';

import User from '../../models/User.js';

const router = Router();

router.post('/auth/register', async (req:Request, res:Response) => {
    const { first_name, last_name, email, password } = req.body;


    if (!first_name || !last_name || !email || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Please provide a valid email' });
        return;
    }

    if (password.length < 6) {
        res.status(400).json({ message: 'Password must be at least 6 characters' });
        return;
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists with this email' });
            return;
        }

       

        // Create new user
        const newUser = await User.create({
            id: Date.now(),
            first_name,
            last_name,
            email,
            password
        });

        res.status(200).json({ message: 'Registration successful!', user: newUser });
        return;
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed. Please try again.' });
        return;
    }
});

export default router;