const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Joi = require("joi");

// Validation Schema for Registration
const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// Validation Schema for Login
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User registered", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
        res.cookie('token', token, cookiesOption)
        return res.json({
            message: "Login successfully",
            error: false,
            success: true,
            data: {
                token,
            }
        })
    } else {
        res.status(400).json({ error: "Invalid credentials" });
    }
};

const logout = async (req, res) => {
    res.clearCookie('token')
    return res.json({
        message: "Logout successfully",
        error: false,
        success: true,
    })
}

module.exports = { register, login, logout };