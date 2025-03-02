const { OpenAI } = require("openai");
const Plan = require("../models/Plan");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generatePlan = async (req, res) => {
    const { experience, companies, time } = req.body;
    const prompt = `Generate a SQL preparation plan for a user with:
  - Experience: ${experience} years
  - Target Companies: ${companies}
  - Time Commitment: ${time} hours per day
  Include at least 25 questions with details like title, company, and difficulty level.`;

    const response = await openai.completions.create({
        model: "gpt-3.5-turbo",
        prompt,
        max_tokens: 500,
    });

    const plan = new Plan({
        userId: req.userId,
        questions: response.choices[0].text.split("\n"),
    });
    await plan.save();

    res.json({ plan: response.choices[0].text });
};

module.exports = { generatePlan };