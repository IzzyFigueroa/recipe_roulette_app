import { Router, } from 'express';
import { createToken, verifyToken } from '../helpers/index.js';
import User from '../../models/User.js';
const router = Router();
router.post('/register', async (req, res) => {
    console.log('REGISTER CONSOLE', req.body);
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
            first_name,
            last_name,
            email,
            password
        });
        const token = createToken(newUser.id);
        res.cookie('token', token, {
            httpOnly: true
        });
        res.json({ message: 'Registration successful!', user: newUser });
        return;
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed. Please try again.' });
        return;
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Check if there is a user with that email address provided in the form
    const user = await User.findOne({
        where: {
            email
        }
    });
    // If we can't find them, we send back an error
    if (!user) {
        res.status(403).json({
            // We can use this property on the front end to cause a redirect over to the register form
            notFound: true,
            user: null,
            message: 'No user found with that email address'
        });
    }
    else {
        // Use our instance method we defined in the User.tsx file to check if their password is correct
        // This compares the form password they typed (ie. 'password123') to an ecrypted string
        // If they match up then validatePassword returns a true boolean
        const valid_pass = await user.validatePassword(password);
        if (!valid_pass) {
            res.status(403).json({
                user: null,
                message: 'Your password is incorrect'
            });
            return;
        }
        // Once they've been found and their password is validated, we send them a cookie with a token
        const token = createToken(user.id);
        res.cookie('token', token, {
            httpOnly: true
        });
        // Send back the user object
        res.json({
            user
        });
    }
});
router.get('/user', async (req, res) => {
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
// Log out user
router.get('/logout', async (_, res) => {
    // Delete the cookie from the client/browser - This essentially logs them out because they don't have a cookie to send
    res.clearCookie('token');
    res.json({
        message: 'Logged out successfully!'
    });
});
export default router;
