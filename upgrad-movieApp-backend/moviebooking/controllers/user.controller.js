const { v4: uuidv4 } = require('uuid');
const UUIDTokenGenerator = require('uuid-token-generator');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Consider using JWT for token generation and verification

const tokenGenerator = new UUIDTokenGenerator();

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = tokenGenerator.generate();
        user.tokens.push(token); // Assuming `tokens` is an array field in the user schema
        await user.save();

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const signup = async (req, res) => {
    const { first_name, last_name, password } = req.body;
    const username = `${first_name}.${last_name}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new UserModel({
            username,
            password: hashedPassword,
            tokens: []
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const logout = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const user = await UserModel.findOne({ 'tokens': token });
        if (user) {
            user.tokens = user.tokens.filter(t => t !== token);
            await user.save();
        }
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login, signup, logout };
